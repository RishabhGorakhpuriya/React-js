import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import PictureItem from './PictureItem';
import Spinner from './Spinner';
import './Picture.css'


export default function Picture(props) {
    const [hits, setHits] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(true)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdatePicture = async () => {
        const url = ` https://pixabay.com/api/?key=28977996-69ed24f9f97a42b3bd47cd666&category=${props.category}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setHits(parsedData.hits)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        document.tittle = `${capitalizeFirstLetter(props.category)}`
        UpdatePicture();
    }, [])

    let fetchMoreData = async () => {
        const url = ` https://pixabay.com/api/?key=28977996-69ed24f9f97a42b3bd47cd666&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json();
        setHits(hits.concat(parsedData.hits))
        setTotalResults(parsedData.totalResults)
    }

    return (
        <>
            <h1 className="text-center" style={{ margin: '70px 0px 25px 0px' }}>Top {capitalizeFirstLetter(props.category)} image</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={hits.length}
                next={fetchMoreData}
                hasMore={hits.length !== totalResults}
                loader={<Spinner />} style={{ marginTop: '30px' }}>
                <div className='gffkfk' >
                    {hits.map((element) => {
                        return (
                            <div className='qieie' key={element.url}>
                                <PictureItem webformatURL={element.webformatURL} largeImageURL={element.largeImageURL} tags={element.tags} likes={element.like} comments={element.comments}/>
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}
Picture.defaultProps = {
    pageSize: 8,
    category: 'education',
}
Picture.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}