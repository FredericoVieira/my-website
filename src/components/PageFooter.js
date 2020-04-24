import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer className="footer text-center">
      <div className="container">
        Copyright &copy; {config.authorName}
      </div>
    </footer>
  );
}
