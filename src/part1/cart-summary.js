var tax = require('./tax');

function CartSummary(items) {
	this._items = items;
}

CartSummary.prototype.getSubtotal = function() {
	if (this._items.length) {
		return this._items.reduce(function(subtotal, item) {
			return subtotal += (item.quantity * item.price);
		}, 0);
	}

	return 0;
};

CartSummary.prototype.getSubtotalDisc = function() {
	if (this._items.length) {
		return this._items.reduce(function(subtotal, item) {
			return subtotal += (item.quantity * item.price) - ((item.quantity * item.price) * 10/100);
		}, 0);
	}

	return 0;
};



CartSummary.prototype.getCount = function() {
	if (this._items.length) {
		return this._items.reduce(function(subtotal, item) {
			return subtotal += (item.quantity);
		}, 0);
	}

	return 0;
};



CartSummary.prototype.getTax = function(state, done) {
	tax.calculate(this.getSubtotal(), state, function(taxInfo) {
		done(taxInfo.amount);
	});
};

module.exports = CartSummary;
