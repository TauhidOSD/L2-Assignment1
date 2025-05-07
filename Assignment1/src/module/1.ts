{//

    function formatString (input : string , toUpper?: boolean ): string{
       if( toUpper ?? true ){
        return input.toUpperCase()
       }else{
        return input.toLocaleLowerCase()
       }
    }

  console.log(formatString('result', true ));
  
    
      

    //
 
}