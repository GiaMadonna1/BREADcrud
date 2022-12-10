const React = require('react')
const Default = require('./layouts/default')

function Index ({BREADcrud}) {
    return (
        <Default>
            <h2> Index Page </h2>
         {/*   <p> I Have {BREADcrud[0].name} bread!</p> */}
         <ul>
            {
                BREADcrud.map((bread, index)=> {
                    return(<li key={index}>
                        <a href={`/BREADcrud/${index}`}>
                            {bread.name}
                        </a>
                    </li>)
                })
            }
         </ul>
        </Default>
    )
}

module.exports = Index