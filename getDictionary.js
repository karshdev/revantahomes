const dictionaries={
    en:()=> import("./dict/en.json").then(res=>res.default),
    hi:()=>import("./dict/hi.json").then(res=>res.default),
}
export const getDictionary=(lang)=>{
    return dictionaries[lang]();
}