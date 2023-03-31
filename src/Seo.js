import { Helmet } from 'react-helmet-async';
const Seo = ({title,description,type})=>{

return (
<Helmet>
 <title>{title}</title>
 <meta name='description' content={description} />
 <meta property="og:type" content={type} />
 <meta property="og:title" content={title} />
 <meta property="og:description" content={description} />
 <meta property="og:locale" content="en_US" />
    </Helmet>
)
}
export default Seo