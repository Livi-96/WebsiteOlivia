
import { Document, Page } from 'react-pdf';

export default function CV(){

    const pdfURL = '/assets/CV2024.pdf';

    return(<>
    <iframe src="/assets/CV2024.pdf" style={{width: "100%", height: "100vh"}}/>
    </>)
}