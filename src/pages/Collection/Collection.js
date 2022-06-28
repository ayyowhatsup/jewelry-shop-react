import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { } from './Collection.css'
import {API_URL} from './../../const'

function Collection(props) {
    const { collectionId } = useParams()
    const [collection, setCollection] = useState({items:[]})
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(API_URL+`/${props.type}/${collectionId}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(collection => {
                setCollection(collection)
                setItems(collection.items)
            })
    }, [collectionId])

    return (
        <div className="new-collection">
            <div className="new-collection-header">
                <div className='new-container'>

                    <div className='new-collection-header-wrap'>
                        <div className='new-collection-destination'>
                            <Link
                                style={{ textDecoration: "none", marginRight: "10px" }}
                                to={"/"}
                            >
                                Trang chủ
                            </Link>
                            <span style={{ marginRight: "10px" }}>{">"}</span>
                            <span>{collection.name}</span>
                        </div>
                        <h1 className='collection-name'>{collection.name}<span style={{fontWeight:'normal', fontSize: 'small'}}>({collection.items.length})</span></h1>                      
                        <p>{collection.description}</p>
                    </div>
                </div>

            </div>
            <div className='new-collection-content'>
                <div className='new-collection-content-top-bar'>
                    Miễn phí vận chuyển cho toàn bộ đơn hàng
                </div>
                <div className='new-collection-content-item'>
                    <div className='new-collection-content-item-list'>
                        {items.map(item => (
                            <Link key={item.id} to={`/jewelry/${item.id}`}  className='new-collection-content-collection-item'>
                                <div className='new-collection-content-collection-item-img-wrap'>
                                    <div className='collection-item-thumbnail'>
                                        <img style={{width:"100%"}} src={item.image[1]} alt={item.name}></img>
                                        <div>
                                            <img className='collection-item-thumbnail-img-active'  src={item.image[0]} alt={item.name}></img>
                                        </div>
                                    </div>


                                </div>
                                <p>{item.name}</p><br />
                                <div className='collection-item-price'>{new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(item.price)
                                }</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Collection