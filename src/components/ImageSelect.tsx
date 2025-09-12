import { useState, type ChangeEvent } from "react";
import styles from './ImageSelect.module.css';

export default function ImageSelect(props: ImageSelectProps) {

    const [base64Image, setBase64Image] = useState('');
    const [urlImage, setUrlImage] = useState(props.imageURL ? props.imageURL : '');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileSelected = e.target.files[0];
            toBase64(fileSelected).then(value => setBase64Image(value))
                .catch(error => console.error(error));

            props.selectedImage(fileSelected);
            setUrlImage('');
            /*e.target.value = '';*/
        }
    }

    const toBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept="image/*" onChange={handleOnChange} /> {/*accep=".jpg,.jpeg,.png""  */}
            </div>
            {base64Image ?
                <div>
                    <div className={styles.div}>
                        <img src={base64Image} alt="Selected image" />
                    </div>
                </div> : undefined
            }
            {urlImage ?
                <div>
                    <div className={styles.div}>
                        <img src={urlImage} alt="Picture of actor" />
                    </div>
                </div> : undefined
            }
        </div>
    )
}

interface ImageSelectProps {
    label: string;
    imageURL?: string;
    selectedImage: (file: File) => void;
}