export const Feed = ({ pageNumber, articles }) => {
  return <div>Hello world</div>;
};

export const getServerSideProps = async (pageContext: any) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber:any}`, 
    {
        headers: {
            Authorization : `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
        },
    } ,
  );
};

export default Feed;
