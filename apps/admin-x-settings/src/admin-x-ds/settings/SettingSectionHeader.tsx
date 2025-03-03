import React from 'react';

interface Props {
    title: string;
    sticky?: boolean;
}

const SettingSectionHeader: React.FC<Props> = ({title, sticky = false}) => {
    let styles = 'pb-[9px] mb-px text-2xs font-semibold uppercase tracking-wider text-grey-700 z-20 ';
    if (sticky) {
        styles += ' sticky top-0 -mt-4 pt-4 bg-white dark:bg-black';
    }
    return (
        <h2 className={styles}>{title}</h2>
    );
};

export default SettingSectionHeader;