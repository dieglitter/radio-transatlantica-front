import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { createEditorial } from '../services/editorial'
import {useHistory} from 'react-router-dom'
import { useTranslation } from "react-i18next"

const EditorialFormStyled = styled.form`
background-color: white;
margin: 120px 0;
width: 480px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 2px solid black;
padding: 24px;
 
 h2,h3,h4{
     padding: 0;
     margin: 0;
     display: inline;
 }

  .send{
      width:100%;
      padding: 0;
      margin: 0;
      color: white;
      background-color: black;
  }
  .send:disabled{
      opacity: 0.5;
  }

  textarea{
      width: 100%;
  }

  .text-space{
      width: 100%;
  }

  .radio{
      display:flex;
      flex-direction: row;
      justify-content: flex-start;

  }

  .HeadlineSettings{
      color: white;
      background-color: black;
      border-radius:8px;
      height: 32px;
      width: 50%;
      padding: 0;
      margin: 0;
  }
  
`

function EditorialForm() {

    const { t } = useTranslation()

    const history = useHistory()

    const articleCategoryInput = useInput("")
    const headlineInput = useInput("")
    const headlineSizeInput = useInput("")
    const headlineTypefaceInput = useInput("")
    const headlineWidthInput = useInput("")
    const headlineAlignmentInput = useInput("")
    const subHeadlineInput = useInput("")
    const subHeadlineSizeInput = useInput("")
    const subHeadlineTypefaceInput = useInput("")
    const subHeadlineWidthInput = useInput("")
    const subHeadlineAlignmentInput = useInput("")
    const bodyTextInput = useInput("")
    const writerNameInput = useInput("")
    const writerBioInput = useInput("")
    const writerInstagramInput = useInput("")
    const photographerNameInput = useInput("")
    const dateInput = useInput("")

    const [bannerUrl, setBannerUrl] = useState(null)
    const [bodyPic1Url, setbodyPic1Url] = useState(null)
    const [bodyPic2Url, setbodyPic2Url] = useState(null)

    async function submitForm(e) {
        e.preventDefault()
        await createEditorial({
            articleCategory: articleCategoryInput.value,
            headline: headlineInput.value,
            headlineSize: headlineSizeInput.value,
            headlineTypeface: headlineTypefaceInput.value,
            headlineWidth: headlineWidthInput.value,
            headlineAlignment: headlineAlignmentInput.value,
            subHeadline: subHeadlineInput.value,
            subHeadlineSize: subHeadlineSizeInput.value,
            subHeadlineTypeface: subHeadlineTypefaceInput.value,
            subHeadlineWidth: subHeadlineWidthInput.value,
            subHeadlineAlignment: subHeadlineAlignmentInput.value,
            bannerImage: bannerUrl,
            bodyImage1: bodyPic1Url,
            bodyImage2: bodyPic2Url,
            bodyText: bodyTextInput.value,
            writer: writerNameInput.value,
            writerBio: writerBioInput.value,
            instagram: writerInstagramInput.value,
            photographer: photographerNameInput.value,
            date: dateInput.value,
         } )
        history.push("/editorial")
    }

 
    async function uploadBanner({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setBannerUrl(secure_url)
    }

    async function uploadBodyPic1({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setbodyPic1Url(secure_url)
    }

    async function uploadBodyPic2({target: {files} }){
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'radio-transatlantica')

        const {data: {secure_url}} 
        = await axios.post(
            'https://api.cloudinary.com/v1_1/dieglitter/image/upload',
            data
            )
            setbodyPic2Url(secure_url)
    }   

    return (
        <EditorialFormStyled  onSubmit={submitForm}>
            <h2>{t("new-editorial-title")}</h2>
            <br/>
            <h4>{t("article-category")}</h4>
            <div 
            className="radio" 
            {...articleCategoryInput}
            >
                <input type="radio" id="Art" value="Art" name="articleCategory"/>
                <label htmlFor="Art">Art</label>
                <input type="radio" id="Culture" value="Culture" name="articleCategory"/>
                <label htmlFor="Culture">Culture</label>
                <input type="radio" id="Music" value="Music" name="articleCategory"/>
                <label htmlFor="Music">Music</label>
            </div>
            <br/>
            <h4 htmlFor="headline">{t("headline")}</h4>
            <input 
            type="text" 
            id="headline" 
            name="headline" 
            placeholder="Is Techno Dead?" 
            className="text-space"
            {...headlineInput}
            />    
            <br/>
            <h4>{t("headline-size")}</h4>
            <div 
            className="radio" 
            {...headlineSizeInput}
            >
                <input type="radio" id="Small" value="Small" name="headlineSize"/>
                <label htmlFor="Small">Small</label>
                <input type="radio" id="Medium" value="Medium" name="headlineSize"/>
                <label htmlFor="Medium">Medium</label>
                <input type="radio" id="Large" value="Large" name="headlineSize"/>
                <label htmlFor="Large">Large</label>
                <input type="radio" id="Extra-Large" value="Extra-Large" name="headlineSize"/>
                <label htmlFor="Extra-Large">Extra-Large</label>
            </div>
            <br/>
            <h4>{t("headline-typeface")}</h4>
            <div 
            className="radio"
            {...headlineTypefaceInput}
            >
                <input type="radio" id="Serif" value="Serif" name="headlineTypeface"/>
                <label htmlFor="Serif">Serif</label>
                <input type="radio" id="Sans-Serif" value="Sans-Serif" name="headlineTypeface"/>
                <label htmlFor="Sans-Serif">Sans-Serif</label>
            </div>
            <br/>
            <h4>{t("headline-width")}</h4>
            <div 
            className="radio"
            {...headlineWidthInput}
            >
                <input type="radio" id="fifty" value="fifty" name="headlineWidth"/>
                <label htmlFor="fifty">50%</label>
                <input type="radio" id="seventy-five" value="seventy-five" name="headlineWidth"/>
                <label htmlFor="seventy-five">75%</label>
                <input type="radio" id="hundred" value="hundred" name="headlineWidth"/>
                <label htmlFor="hundred">100%</label>
            </div>
            <br/>
            <h4>{t("headline-alignment")}</h4>
            <div 
            className="radio"
            {...headlineAlignmentInput}
            >
                <input type="radio" id="Left" value="Left" name="headlineAlignment"/>
                <label htmlFor="Left">Left</label>
                <input type="radio" id="Center" value="Center" name="headlineAlignment"/>
                <label htmlFor="Center">Center</label>
            </div>
           
            <br/>
            <h4>{t("sub-headline")}</h4>
            <input 
            type="text" 
            id="Sub-Headline" 
            name="subHeadline" 
            placeholder="Yes,it's dead" 
            className="text-space"
            {...subHeadlineInput}
            />
            <br/>
            <h4>{t("sub-headline-size")}</h4>
            <div 
            className="radio" 
            {...subHeadlineSizeInput}
            >
                <input type="radio" id="SH-Small" value="SH-Small" name="subHeadlineSize"/>
                <label htmlFor="SH-Small">Small</label>
                <input type="radio" id="SH-Medium" value="SH-Medium" name="subHeadlineSize"/>
                <label htmlFor="SH-Medium">Medium</label>
                <input type="radio" id="SH-Large" value="SH-Large" name="subHeadlineSize"/>
                <label htmlFor="SH-Large">Large</label>
                <input type="radio" id="SH-Extra-Large" value="SH-Extra-Large" name="subHeadlineSize"/>
                <label htmlFor="SH-Extra-Large">Extra-Large</label>
            </div>
            <br/>
            <h4>{t("sub-headline-typeface")}</h4>
            <div 
            className="radio"
            {...subHeadlineTypefaceInput}
            >
                <input type="radio" id="Serif" value="Serif" name="subHeadlineTypeface"/>
                <label htmlFor="Serif">Serif</label>
                <input type="radio" id="Sans-Serif" value="Sans-Serif" name="subHeadlineTypeface"/>
                <label htmlFor="Sans-Serif">Sans-Serif</label>
            </div>
            <br/>
            <h4>{t("sub-headline-typeface")}</h4>
            <div 
            className="radio"
            {...subHeadlineWidthInput}
            >
                <input type="radio" id="fifty" value="fifty" name="subHeadlineWidth"/>
                <label htmlFor="fifty">50%</label>
                <input type="radio" id="seventy-five" value="seventy-five" name="subHeadlineWidth"/>
                <label htmlFor="seventy-five">75%</label>
                <input type="radio" id="hundred" value="hundred" name="subHeadlineWidth"/>
                <label htmlFor="hundred">100%</label>
            </div>
            <br/>
            <h4>{t("sub-headline-typeface")}</h4>
            <div 
            className="radio"
            {...subHeadlineAlignmentInput}
            >
                <input type="radio" id="Left" value="Left" name="subHeadlineAlignment"/>
                <label htmlFor="Left">Left</label>
                <input type="radio" id="Center" value="Center" name="subHeadlineAlignment"/>
                <label htmlFor="Center">Center</label>
            </div>
            <br/>
            <h4>{t("body-text")}</h4>
            <textarea 
            name="bodyText" 
            id="bodyText" 
            cols="30" rows="10" 
            className="text-space" 
            {...bodyTextInput}
            />
            <br/>
            <h4>{t("body-text")}</h4>
            <input 
            type="file" 
            name="bannerImage"
            onChange={uploadBanner}
            />
            <br/>

            <h4>{t("body-image-1")}</h4>
            <input 
            type="file" 
            name="bodyImage1"
            onChange={uploadBodyPic1}
            />
            <br/>
            <h4>{t("body-image-2")}</h4>
            <input 
            type="file" 
            name="bodyImage2"
            onChange={uploadBodyPic2}
            />
            <br/>
            <h4>{t("writer-name")}</h4>
            <input 
            type="text" 
            placeholder="Writer" 
            name="writer" 
            className="text-space"
            {...writerNameInput}
            />
            <br/>
            <h4>{t("writer-bio")}</h4>
            <textarea 
            name="writerBio" 
            id="" 
            cols="30" 
            rows="4" 
            placeholder="Short Writer Bio" 
            className="text-space"
            {...writerBioInput}
            />
            <br/>
            <h4>{t("writer-instagram")}</h4>
            <input 
            type="text" 
            name="instagram" 
            id="instagram" 
            placeholder="radiotransatlantica" 
            className="text-space"
            {...writerInstagramInput}
            />
            <br/>
            <h4>{t("photographer-name")}</h4>
            <input 
            type="text" 
            name="photographer" 
            id="photographer" 
            placeholder="Name of Photographer" 
            className="text-space"
            {...photographerNameInput}
            />
            <br/>
            <h4>{t("publish-date")}</h4>
            <input 
            type="text" 
            name="date" 
            id="date" 
            placeholder="22/01/1991" 
            className="text-space"
            {...dateInput}
            />
            <br/>
            <button type="submit" className="send" disabled={!bannerUrl || !bodyPic1Url || !bodyPic2Url}>{t("submit")}</button>


        </EditorialFormStyled>
    )
}

export default EditorialForm
