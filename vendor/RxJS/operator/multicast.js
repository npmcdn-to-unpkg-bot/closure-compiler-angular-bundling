goog.module('rxjs$operator$multicast');
var ConnectableObservable_1 = goog.require('rxjs$observable$ConnectableObservable');
/**
 *  Returns an Observable that emits the results of invoking a specified selector on items emitted by a ConnectableObservable that shares a single subscription to the underlying stream. * <img src="./img/multicast.png" width="100%"> * as many times as needed, without causing multiple subscriptions to the source stream. Subscribers to the given source will receive all notifications of the source from the time of the subscription forward. on the items emitted by a `ConnectableObservable` that shares a single subscription to the underlying stream.
 * @method multicast
 * @owner Observable
 * @param {?} subjectOrSubjectFactory
 * @return {?}
 */
function multicast(subjectOrSubjectFactory) {
    let /** @type {?} */ subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = (subjectOrSubjectFactory);
    }
    else {
        subjectFactory = function subjectFactory() {
            return (subjectOrSubjectFactory);
        };
    }
    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
}
exports.multicast = multicast;
