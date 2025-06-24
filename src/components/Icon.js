import React, { useMemo } from 'react';
import feather from 'feather-icons'; // Import the library directly

const Icon = ({ name, ...props }) => {
    const iconHtml = useMemo(() => {
        if (feather.icons[name]) {
            // No need to check for window.feather anymore
            return { __html: feather.icons[name].toSvg(props) };
        }
        return { __html: '' }; // Return empty if icon name is invalid
    }, [name, props]);

    // Add a key prop to force re-render when icon changes, helps with reliability
    return <i key={name} dangerouslySetInnerHTML={iconHtml} />;
};

export default Icon;