import React from "react";
import './codeExample.sass'

export const nodejs = 'nodejs';
export const python = 'python';

export const getUsageBlock = (language, apiKey) => {
    const languageUsages = {
        'nodejs': (
            <p>
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
        'python': (
            <p>
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

export const getInstall = (language) => {
    let installs = {
        'nodejs': 'npm install dbhub -s',
        'python': 'pip install dbhub'
    };
    return installs[language]
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