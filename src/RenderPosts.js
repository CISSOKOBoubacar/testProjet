const RenderPosts = () => {
    // initializes states
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
          // update posts
        } catch (err) {
        } finally {
        }
      };
      fetchUsers();
    }, []);
  
    return (
      <div className="wrapper">
        {loading && <div>A moment please...</div>}
        {error && <div>{`Problem fetching the post data - ${error}`}</div>}
        <ul>{/* render posts */}</ul>
      </div>
    );
  };
  
  export default RenderPosts;