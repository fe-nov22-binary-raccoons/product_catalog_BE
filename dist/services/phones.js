import { Phone } from '../models/Phone.js';
import { PhoneItem } from '../models/PhoneItem.js';
export const getPage = async (page, size, sort) => {
    const offset = (page - 1) * size;
    let sortField = 'year';
    let sortOrder = 'DESC';
    if (sort === 'title') {
        sortField = 'name';
        sortOrder = 'ASC';
    }
    if (sort === 'price') {
        sortField = 'price';
        sortOrder = 'ASC';
    }
    try {
        const phones = await Phone.findAll({
            order: [[sortField, sortOrder]],
            offset,
            limit: size,
        });
        const total = await Phone.count();
        return {
            phones,
            total,
            page,
            size,
        };
    }
    catch (_a) {
        return 500;
    }
};
export const getRecommendedPhones = async (phoneId) => {
    try {
        const phones = await Phone.findAll({
            order: [['name', 'ASC']],
        });
        let id = phones.findIndex((phone) => phone.phoneId === phoneId);
        if (id === -1) {
            return 404;
        }
        if (id > phones.length - 9) {
            id = phones.length - 9;
        }
        const relatedPhones = phones.slice(id + 1, id + 9);
        return { phones: relatedPhones };
    }
    catch (_a) {
        return 500;
    }
};
export const getPhoneById = async (phoneId) => {
    try {
        const phone = await PhoneItem.findByPk(phoneId);
        if (!phone) {
            return 404;
        }
        return phone;
    }
    catch (_a) {
        return 500;
    }
};
//# sourceMappingURL=phones.js.map