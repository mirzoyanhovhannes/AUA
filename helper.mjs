/**
 * @author Hovhannes Mirzoyan
 */
import fetch from "node-fetch";


async function funcName(url){
    await fetch(url)
        .then(res => res)
        .then((json) => console.log(json))
}
