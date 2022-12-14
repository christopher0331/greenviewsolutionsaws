import * as React from 'react';

const Selector = (props) => (
    <div>
        <select className='calculatorSelectorField' value={props.fenceType} onChange={props.updateFence}>
            <option value='StandardPickets'>Standard Pickets</option>
            <option value='PremiumPickets'>Premium Pickets</option>
            <option value='RanchRail'>Ranch Rail</option>
            <option value='RanchRail'>Split Rail</option>
            <option value='RanchRail'>Custom Rail</option>
            <option value='RanchRail'>Custom Fence</option>
            <option value='RanchRail'>Board Over Board Rail</option>
            <option value='ChainLinkFence'>Chain Link Fence</option>
            <option value='WroughtIron'>Wrought Iron</option>
            <option value='CompositeFence'>Composite</option>
        </select>   
    </div>
)

export default Selector;