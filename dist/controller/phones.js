import * as phoneServices from '../services/phones.js';
export const getAll = async (req, res) => {
    const { page, size, sort } = req.query;
    let pageNumber = Number(page);
    let sizeNumber = Number(size);
    const sortBy = sort || 'year';
    if (!pageNumber) {
        pageNumber = 1;
    }
    if (!sizeNumber) {
        sizeNumber = 16;
    }
    const pageOfPhones = await phoneServices.getPage(pageNumber, sizeNumber, sortBy);
    if (typeof pageOfPhones === 'number') {
        res.sendStatus(pageOfPhones);
        return;
    }
    res.send(pageOfPhones);
};
export const getRecommendedPhones = async (req, res) => {
    const { phoneId } = req.params;
    const pageOfPhones = await phoneServices.getRecommendedPhones(phoneId);
    if (typeof pageOfPhones === 'number') {
        res.sendStatus(pageOfPhones);
        return;
    }
    res.send(pageOfPhones);
};
export const getPhoneById = async (req, res) => {
    const { phoneId } = req.params;
    const phone = await phoneServices.getPhoneById(phoneId);
    if (typeof phone === 'number') {
        res.sendStatus(phone);
        return;
    }
    res.send(phone);
};
export const getNewPhones = async (req, res) => {
    const phones = await phoneServices.getPage(1, 12, 'year');
    res.send(phones);
};
export const getPhonesWithDiscount = async (req, res) => {
    const phones = await phoneServices.getPhonesWithDiscount();
    res.send(phones);
};
//# sourceMappingURL=phones.js.map