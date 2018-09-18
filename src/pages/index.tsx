import * as React from 'react';
import Link from 'gatsby-link';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';
import './css/search.css';
import './css/index.css';

export interface NewsOutlets {
  title: string;
  type: 'independent' | 'propaganda';
}

interface MainPageProps {
  newsOutlets: NewsOutlets[];
}

export default (props: MainPageProps) => (
  <div>
    <Navbar isHomePage={true} />
    <header id="heading" role="banner">
      <h1>Democrable</h1>
    </header>
    <SearchField newsOutlets={[]} />
  </div>
);
