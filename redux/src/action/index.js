export function moviesList(){
   return {
       type: 'MoviesList',
       payload: [
           {id: 1, name: 'BigBrother'},
           {id: 2, name: 'Avengers'},
           {id: 3, name: 'Death Race'}
       ]
   }
}