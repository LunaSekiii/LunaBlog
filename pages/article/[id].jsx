import React, {useState, useEffect} from 'react';
import Router, {useRouter} from 'next/router';
import Head from 'next/head';
import Markdown from '../../components/Markdown/Markdown';

const Article = () => {
    const router = useRouter();
    const {id} = router.query;
    const [content, setContent] = useState({
        text: '加载中',
        title: '',
    });
    
    useEffect(() => {
        // console.log(id)
        if(id != undefined)getArticle();
        return () => {
            console.log('unmount');
        };
    }, [id]);

    const getArticle = ()=>{
        fetch(`http://106.52.86.38:1337/api/blogs/${id}`, {
            headers:{
                //设置请求token
                'Authorization': 'bearer 750a178739729b9dcc993c5f52895976ca357d13aa3cbaa791df40466e8327e668345788f7f621768e262b29d9d054e09ef6ca6d8d69e96e73043eb546f9f03a0c1a435b06b24577fbd1b75e798187d1790cfc27786cf407b96236af3777a4e7b5a203fe4e72b2af48bdf93a000c79ee1403aef47ff6214620686c6bd3c3d495',
            }
        }).then(res=>{
            res.json().then(data=>{
                setContent({
                    text: data.data.attributes.text,
                    title: data.data.attributes.text.split("\n")[0].replace('#', '').replace(' ', '')+" -- LunaSeki的博客"
                });
                console.log(data)
            }).catch(err=>{
                console.log(err)
            })
        }).catch(
            err=>console.log(err)
        )
    }

    return (
        <div className='w-full min-h-screen  flex flex-col items-center bg-gradient-to-br from-gray-200 to-gary-100'>
            <Head>
                <title>{content.title}</title>
            </Head>
            {/* <head>
                <title>{content.title}</title>
            </head> */}
            <div className='btn w-30'>返回文章列表</div>
            {/* <div className='btn' onClick={getArticle}>eee</div> */}
            <Markdown content={content.text}/>
            <footer className=''>
                lunaseki
            </footer>
        </div>
    );
}

export default Article;
