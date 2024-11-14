import React from 'react'; // Import React
import { Link, useLocation } from 'react-router-dom'; // Import Link and location hook
import s from './index.module.css'; // Import styles

export default function Breadcrumbs() {
  const location = useLocation(); // Get current path
  const pathnames = location.pathname.split('/').filter(x => x); // Split path into segments

  let currentLink = ''; // Track current link

  // Generate breadcrumbs
  const crumbs = pathnames.map((crumb, index) => {
    currentLink += `/${crumb}`;

    // Check if last segment
    const isLast = index === pathnames.length - 1;

    return (
      <React.Fragment key={currentLink} className={s.mainBreadcrumb}> {/* Wrap in fragment */}
        {!isLast ? ( // Check for non-last breadcrumb
          <div className={s.crumb}> {/* Breadcrumb item */}
            <Link to={currentLink} className={s.link}> {/* Breadcrumb link */}
              {crumb.charAt(0).toUpperCase() + crumb.slice(1)} {/* Capitalize text */}
            </Link>
            {' ⸺'} {/* Separator */}
          </div>
        ) : (
          <span className={s.crumb}> {/* Last breadcrumb */}
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)} {/* Capitalize text */}
          </span>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={s.breadcrumbs}> {/* Breadcrumb container */}
      <div className={s.breadcrumbsContainer}> {/* Inner container */}
       <Link to="/" className={s.link}>Main Page</Link> {/* Link to home */}
      {' ⸺ '}
      {crumbs} {/* Display breadcrumb items */}
      </div>
    </div>
  );
}
