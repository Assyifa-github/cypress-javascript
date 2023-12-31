import * as dashboardPage from '@test/pages/dashboard.page';
import * as customerPage from '@test/pages/customer.page';
import * as assert from '@helper/assert';
import * as element from '@helper/element';
import { verifySearchResult } from '../../pages/customer.page';

describe('Open account test', () => {
    beforeEach(() => {
        cy.loginAsBankManager();
        element.click(dashboardPage.customerTab);

    });
    it('Should success landing on Customer page', () => {
        assert.shouldBeVisible(customerPage.searchCustomerField);
        assert.shouldBeVisible(customerPage.customerTable);
    });

    it('Should success search customer', () => {
        element.fillField(customerPage.searchCustomerField,"Ron");
        assert.shouldBeVisible(verifySearchResult);
    });

});