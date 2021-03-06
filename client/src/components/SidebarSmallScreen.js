import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useAppContext } from '../context/appContext';
import styled from 'styled-components';

const SidebarSmallScreen = () => {
   const { showSidebar, toggleSidebar } = useAppContext();

   return (
      <Wrapper>
         <div
            className={`sidebar-container ${
               showSidebar ? 'show-sidebar' : null
            }`}
         >
            <div className="content">
               <button className="close-btn" onClick={toggleSidebar}>
                  <FaTimes />
               </button>

               <header>
                  <Logo />
               </header>

               <NavLinks toggleSidebar={toggleSidebar} />
            </div>
         </div>
      </Wrapper>
   );
};

export default SidebarSmallScreen;

const Wrapper = styled.aside`
   @media (min-width: 992px) {
      display: none;
   }
   .sidebar-container {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
      opacity: 0;
      transition: var(--transition);
   }
   .show-sidebar {
      z-index: 99;
      opacity: 1;
   }
   .content {
      background: var(--white);
      width: var(--fluid-width);
      height: 95vh;
      border-radius: var(--borderRadius);
      padding: 4rem 2rem;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
   }
   .close-btn {
      position: absolute;
      top: 10px;
      left: 10px;
      background: transparent;
      border-color: transparent;
      font-size: 2rem;
      color: var(--red-dark);
      cursor: pointer;
   }
   .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
   }

   .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-text);
      padding: 1rem 3rem;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
   }
   .nav-link:hover {
      background: var(--primary-300);
      color: var(--white);
   }
   .nav-link:hover .icon {
      color: var(--white);
   }
   .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);

      color: var(--primary-500);
   }
   .active {
      background: var(--primary-500);
      color: var(--white);
   }
   .active .icon {
      color: var(--white);
   }

   .logo {
      width: 100%;
   }
`;
