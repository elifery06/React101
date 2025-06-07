import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)



{/* <StrictMode>, React'ta sadece geliştirme sırasında çalışan, potansiyel hataları ve kötü uygulamaları tespit etmeye yardımcı olan bir bileşendir. Üretim sürümünde hiçbir etkisi yoktur. Kısaca, React kodunun daha güvenli ve sağlam yazılmasını sağlar.
    <StrictMode>
    <App />
  </StrictMode>, */

}
