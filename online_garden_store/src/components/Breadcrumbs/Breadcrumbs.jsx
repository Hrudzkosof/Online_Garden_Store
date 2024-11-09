import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './index.module.css';

export default function Breadcrumbs() {
  const location = useLocation(); // Holen Sie sich den aktuellen Pfad
  const pathnames = location.pathname.split('/').filter(x => x); // Den Pfad in Segmente unterteilen

  let currentLink = '';

  // Breadcrumbs erstellen
  const crumbs = pathnames.map((crumb, index) => {
    currentLink += `/${crumb}`;

    // Check, ob wir uns auf der Produktseite oder einer Kategorie-Seite befinden
    const isLast = index === pathnames.length - 1;

    return (
      <React.Fragment key={currentLink} className={s.mainBreadcrumb}>
        {!isLast ? (
          <div className={s.crumb}>
            <Link to={currentLink} className={s.link}>
              {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
            </Link>
            {' ⸺'}
          </div>
        ) : (
          <span className={s.crumb}>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </span>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={s.breadcrumbs}>
      <div className={s.breadcrumbsContainer}>
       <Link to="/" className={s.link}>Main Page</Link> 
      {' ⸺ '}
      {crumbs} 
      </div>
      
    </div>
  );
}