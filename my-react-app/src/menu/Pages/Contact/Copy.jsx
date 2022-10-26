import React from "react";
import { CopyButton, Button } from '@mantine/core';
import './Copy.scss'

export function Copy() {
    return (
        <CopyButton value="yourbeauty.website.com@gmail.com">
            {({ copied, copy }) => (
                <Button color={copied ? '#a79789' : '#a79789'} onClick={copy}>
                    {copied ? 'Copy email' : 'Copied email'}
                </Button>
            )}
        </CopyButton>
    );
}