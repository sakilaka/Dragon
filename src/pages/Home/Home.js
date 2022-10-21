import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            All news : {allNews.length}
            {
                allNews.map(n => <NewsSummaryCard
                    key={n._id}
                    news={n}>

                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;