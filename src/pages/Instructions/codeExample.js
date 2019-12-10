import React from "react";

export const copyIcon =
        <svg className="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <g data-name="Layer 3">
                <path d="M40.63,13H12.38A4.69,4.69,0,0,0,7.7,17.67V57.31A4.69,4.69,0,0,0,12.38,62H40.63a4.69,4.69,0,0,0,4.69-4.69V17.67A4.69,4.69,0,0,0,40.63,13Zm2.69,44.33A2.69,2.69,0,0,1,40.63,60H12.38A2.69,2.69,0,0,1,9.7,57.31V17.67A2.69,2.69,0,0,1,12.38,15H40.63a2.69,2.69,0,0,1,2.69,2.69Z"/>
                <path d="M51.74,2H23.26a4.58,4.58,0,0,0-4.58,4.57v3.55a1,1,0,0,0,2,0V6.57A2.58,2.58,0,0,1,23.26,4H51.74A2.57,2.57,0,0,1,54.3,6.57V46.44A2.58,2.58,0,0,1,51.74,49H48.5a1,1,0,0,0,0,2h3.24a4.58,4.58,0,0,0,4.57-4.58V6.57A4.57,4.57,0,0,0,51.74,2Z"/>
            </g>
        </svg>;

export const getUsageBlock = (language, apiKey) => {
        const languageUsages = {
                'nodejs': (<p>
                    <span className="keyword">const</span> {'{'}<span className="variable">getDatabase</span>{'}'} =<span className="func"> require</span>(<span className="string">'dbhub'</span>);<br/>
                    <br/>
                    <span className="keyword">let</span> <span className="variable">apiKey</span> =<span className="string"> '{apiKey}'</span>;<br/>
                    <span className="keyword">let</span> <span className="variable">db</span> =<span className="func"> getDatabase</span>(<span className="variable">apiKey</span>);<br/>
                    <br/>
                    {'// Create collection'}<br/>
                    <span className="keyword">let</span> <span className="variable">collectionName</span> = <span className="string">'example'</span>;<br/>
                    <span className="keyword">let</span> <span className="variable">collection</span> = <span className="variable">db</span>.<span className="func">getCollection</span>(<span className="variable">collectionName</span>);<br/>
                    <br/>
                    {'//Usage'}<br/>
                    <span className="variable">collection</span>.<span className="func">create</span>(<span className="variable">element</span>).<span className="func">then</span>((<span className="variable">id</span>) => {'{}'});<br/>
                    <span className="variable">collection</span>.<span className="func">read</span>(<span className="variable">id</span>).<span className="func">then</span>((<span className="variable">element</span>) => {'{}'});<br/>
                    <span className="variable">collection</span>.<span className="func">update</span>(<span className="variable">id</span>, <span className="variable">element</span>).<span className="func">then</span>((<span className="variable">success</span>) => {'{}'});<br/>
                    <span className="variable">collection</span>.<span className="func">delete</span>(<span className="variable">id</span>).<span className="func">then</span>((<span className="variable">success</span>) => {'{}'});<br/>
                </p>
        ),
            'python': (<p>
                    <span className="keyword">from </span><span className="variable">dbhub</span> <span className="keyword">import</span> <span className="func"></span><span className="string">get_database</span><br/>
                    <br/>
                    <span className="variable">api_key</span> =<span className="string"> '{apiKey}'</span><br/>
                    <span className="variable">db</span> =<span className="func"> get_database</span>(<span className="variable">api_key</span>)<br/>
                    <br/>
                    {'// Create collection'}<br/>
                    <span className="variable">collection_name</span> = <span className="string">'example'</span><br/>
                    <span className="variable">collection</span> = <span className="variable">db</span>.<span className="func">get_collection</span>(<span className="variable">collection_name</span>)<br/>
                    <br/>
                    {'//Usage'}<br/>
                    <span className="variable">collection</span>.<span className="func">create</span>(<span className="variable">element</span>)<br/>
                    <span className="variable">collection</span>.<span className="func">read</span>(<span className="variable">id</span>)<br/>
                    <span className="variable">collection</span>.<span className="func">update</span>(<span className="variable">id</span>, <span className="variable">element</span>)<br/>
                    <span className="variable">collection</span>.<span className="func">delete</span>(<span className="variable">id</span>)<br/>
                    <br/>
            </p>
            )};
            return languageUsages[language];
};

export const nodejs = 'nodejs';
export const python = 'python';

export const install = {
    'nodejs': 'npm install dbhub -s',
    'python': 'pip install dbhub'
};

export const getUsage = (language, apikey) => {
    const usage = {
            'nodejs': ('const {getDatabase} = require(\'dbhub\');\n' +
                '\n' +
                'let apiKey = \'' + apikey + '\';\n' +
                'let db = getDatabase(apiKey);\n' +
                '\n' +
                '// Create collection\n' +
                'let collectionName = \'example\';\n' +
                'let collection = db.getCollection(collectionName);\n' +
                '\n' +
                '//Usage\n' +
                'collection.create(element).then((id) => {});\n' +
                'collection.read(id).then((element) => {});\n' +
                'collection.update(id, element).then((success) => {});\n' +
                'collection.delete(id).then((success) => {});'),

            'python':
                ('from dbhub import get_database\n' +
                    '\n' +
                    'api_key = \'aa57dc3a-df8c-1c53-b5f7-6c598a7e4644\'\n' +
                    'db = get_database(api_key)\n' +
                    '\n' +
                    '# Create collection\n' +
                    'collection_name = \'example\'\n' +
                    'collection = db.get_collection(collection_name)\n' +
                    '\n' +
                    '# Usage\n' +
                    'collection.create(element)\n' +
                    'collection.read(id)\n' +
                    'collection.update(id, element)\n' +
                    'collection.delete(id)\n')
                };
    return usage[language];
};
