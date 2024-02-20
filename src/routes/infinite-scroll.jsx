import React from "react";

const useInfiniteScroll = (scrollableRef, loadMore) => {
  const isInitialLoad = React.useRef(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!scrollableRef.current) return;

      /**
        scrollTop: The number of pixels the content of the element is scrolled vertically.
        clientHeight: The inner height of the element, not including the scroll bar.
        scrollHeight: The total height of the element's content, including the content not visible on the screen due to overflow.
  
        The function then checks if the user has scrolled to the bottom of the element. This is done by checking if the sum of scrollTop
        and clientHeight is greater than or equal to scrollHeight - 5. The - 5 creates a 5px threshold before the actual bottom, making
        the experience smoother as it preloads the data slightly before reaching the bottom.
        */
      const {scrollTop, scrollHeight, clientHeight} = scrollableRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMore();
      }
    };

    const scrollableElement = scrollableRef.current;

    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);

      // Perform initial data load if necessary
      if (isInitialLoad.current) {
        loadMore();
        isInitialLoad.current = false;
      }
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadMore]);
};

export function Component() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [lastUserId, setLastUserId] = React.useState(0);
  const scrollableRef = React.useRef(null);

  const fetchData = React.useCallback(async () => {
    if (loading) return; // Prevent multiple fetches when already loading
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users?since=${lastUserId}&per_page=15`); // use this for unauthenticated requests
      // const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
      // const response = await fetch(`https://api.github.com/users?since=${lastUserId}&per_page=15`, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data]);
      if (data.length > 0) {
        setLastUserId(data[data.length - 1].id);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [lastUserId, loading]);

  useInfiniteScroll(scrollableRef, fetchData);

  return (
    <div className="flex justify-center text-3xl text-primary">
      <ul
        ref={scrollableRef}
        className="flex h-96 w-96 flex-col gap-2 overflow-auto border border-primary p-2 text-base text-primary"
      >
        {items.map((item) => {
          return (
            <li key={item.login} className="flex items-center justify-between px-4">
              <img src={item.avatar_url} alt={item.login} className="h-8 w-8 rounded-full" />
              <p>{item.login}</p>
            </li>
          );
        })}
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
      </ul>
    </div>
  );
}
