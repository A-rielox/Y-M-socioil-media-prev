import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import { useEffect } from 'react';
import PageBtnContainerBlogs from './PageBtnContainerBlogs';
import Blog from './Blog';
import styled from 'styled-components';

const BlogsContainer = () => {
   const {
      getBlogs,
      blogs,
      isLoading,
      pageBlogs,
      totalBlogs,

      searchBlog,
      searchCategory,
      sort,
      numOfBlogPages,
   } = useAppContext();

   useEffect(() => {
      getBlogs();
   }, [searchBlog, searchCategory, sort, pageBlogs]);

   if (isLoading) {
      return <Loading center />;
   }

   if (blogs.length === 0) {
      return (
         <Wrapper>
            <h2>No encontramos blogs 😳 ...</h2>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h5>
            {totalBlogs} blog{blogs.length > 1 && 's'} encontrado
            {blogs.length > 1 && 's'}
         </h5>

         <div className="recipes">
            {blogs.map(blog => {
               return <Blog key={blog._id} {...blog} />;
            })}
         </div>

         {numOfBlogPages > 1 && <PageBtnContainerBlogs />}
      </Wrapper>
   );
};

export default BlogsContainer;

const Wrapper = styled.section`
   margin-top: 4rem;

   h2 {
      text-transform: none;
   }
   & > h5 {
      font-weight: 700;
   }
   .recipes {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
   }
   @media (min-width: 992px) {
      .recipes {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1rem;
      }
   }
`;
