import { AxiosError } from "axios"

export function gettingErrorsApi(obj: AxiosError): string[] {   

    const errorsMap: { [key: string]: string[] } = {};

    const data = obj.response?.data as ResponseError;

    data.errors.forEach(err => {
        if(!errorsMap[err.propertyName]) {
            errorsMap[err.propertyName] = [];
        }
        errorsMap[err.propertyName].push(err.errorMessage);
    })

    let errorList: string[] = [];

    for (const key in errorsMap) {
        const messages = errorsMap[key].map(errorMsg => `${key}: ${errorMsg}`);
        errorList = errorList.concat(messages);
        //const combinedMessage = `${key}: ${messages.join(', ')}`;
        //errorList.push(combinedMessage);
    }

    return errorList;
}

interface ResponseError {
    errors: ValidationErrorItem[];
}

interface ValidationErrorItem {
    propertyName: string;
    errorMessage: string;
}