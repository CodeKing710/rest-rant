const { useEffect } = require('react');
const importScript = (url) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {document.body.removeChild(script)};
    }, [url]);
};

module.exports = importScript;