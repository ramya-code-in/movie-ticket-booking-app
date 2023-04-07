import urlConfig from "../../Helpers/Constants"

export const getSections = () => {
    fetch(urlConfig.getAllDetailsUrl).then(res => console.log(res)).catch(err =>
        console.log(err))
}