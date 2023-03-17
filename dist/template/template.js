import { readFileSync } from 'fs';
import path from 'path';
export const returnTemplate = () => {
    const p = path.resolve('src', 'template', './template.html');
    const file = readFileSync(p, 'utf-8');
    return file;
};
//# sourceMappingURL=template.js.map