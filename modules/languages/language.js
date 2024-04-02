class VariablesInLanguage {
    constructor(language){
        this.language = language
    }
    variablesInChoosinglanguage(){
        if(this.language === "English"){
            this.months = ['January','February','March','April','May','June','July','August','September','October','November','December']
            return this.months;
        }else if(this.language === "Myanmar") { 
            this.months = ['ဇန်နဝါရီ','ဖေဖော်ဝါရီ','မတ်','ဧပြီ','မေ','ဇွန်','ဇူလိုင်','သြဂုတ်','စက်တင်ဘာ','အောက်တိုဘာ','နိုဝင်ဘာ','ဒီဇင်ဘာ']
            return this.months;
         }
       // else{
        //     this.months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        //     return this.months;
        // }
    }
    chooseLangague(){
        let language = document.querySelector(".language");
        let a = new VariablesInLanguage(language)
        return a.variablesInChoosinglanguage()
        
    }

}








