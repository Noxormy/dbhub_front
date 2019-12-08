import React from 'react';
import './Instructions.css';

function Instructions(props) {
    const usageCode =
        <p><span className="keyword">const</span> {'{'}<span className="variable">getDatabase</span>{'}'} =<span className="func"> require</span>(<span className="string">'dbhub'</span>);<br/>
        <br/>
        <span className="keyword">let</span> <span className="variable">apikey</span> =<span className="string"> '{props.apiKey}'</span>;<br/>
        <span className="keyword">let</span> <span className="variable">db</span> =<span className="func"> getDatabase</span>(<span className="variable">apiKey</span>);<br/>
        <br/>
        {'// Create collection'}<br/>
            <span className="keyword">let</span> <span className="variable">collectionName</span> = <span className="string">'example'</span>;<br/>
            <span className="keyword">let</span> <span className="variable">collection</span> = <span className="variable">db</span>.<span className="func">getCollection</span>(<span className="variable">collectionName</span>);<br/>
        <br/>
        {'//Usage'}<br/>
        <span className="variable">collection</span>.<span className="func">create</span>(<span className="variable">element</span>)<br/>
        <span className="variable">collection</span>.<span className="func">read</span>(<span className="variable">id</span>)<br/>
        <span className="variable">collection</span>.<span className="func">update</span>(<span className="variable">id</span>, <span className="variable">element</span>)<br/>
        <span className="variable">collection</span>.<span className="func">delete</span>(<span className="variable">id</span>)<br/>
        <br/>
        {'//Async'}<br/>
        <span className="variable">collection</span>.<span className="func">create</span>(<span className="variable">element</span>).<span className="func">then</span>((<span className="variable">id</span>) => {'{}'});<br/>
        <span className="variable">collection</span>.<span className="func">read</span>(<span className="variable">id</span>).<span className="func">then</span>((<span className="variable">element</span>) => {'{}'});<br/>
        <span className="variable">collection</span>.<span className="func">update</span>(<span className="variable">id</span>, <span className="variable">element</span>).<span className="func">then</span>((<span className="variable">success</span>) => {'{}'});<br/>
        <span className="variable">collection</span>.<span className="func">delete</span>(<span className="variable">id</span>).<span className="func">then</span>((<span className="variable">success</span>) => {'{}'});<br/>
    </p>;
    return (
        <div className='instructions'>
            <div className='install'>$ npm install dbhub -s</div>
            <div className='usage'>{usageCode}</div>
        </div>
    );
}

export default Instructions;
