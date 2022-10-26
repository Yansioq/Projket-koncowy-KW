import {useRef} from 'react';

const Count = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);

        event.target.value = null;

        console.log(event.target.files);

        console.log(fileObj);
        console.log(fileObj.name);
    };

    return (
        <div>
            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
            />

            <button onClick={handleClick}>Upload file</button>
        </div>
    );
};

export default Count;
