!(function (e, n) {
  typeof define === 'function' && define.amd
    ? define(['exports'], n)
    : n(typeof exports !== 'undefined' ? exports : (e.dragscroll = {}));
})(this, (e) => {
  let n;
  let t;
  const o = window;
  const r = document;
  let i = [];
  const l = function (e, l) {
    for (e = 0; e < i.length; ) {
      (l = (l = i[e++]).container || l).removeEventListener(
        'mousedown',
        l.md,
        0,
      ),
        o.removeEventListener('mouseup', l.mu, 0),
        o.removeEventListener('mousemove', l.mm, 0);
    }
    for (
      i = [].slice.call(r.getElementsByClassName('dragscroll')), e = 0;
      e < i.length;

    ) {
      !(function (e, i, l, s, d, m) {
        (m = e.container || e).addEventListener(
          'mousedown',
          (m.md = function (n) {
            (e.hasAttribute('nochilddrag') &&
              r.elementFromPoint(n.pageX, n.pageY) != m) ||
              ((s = 1), (i = n.clientX), (l = n.clientY), n.preventDefault());
          }),
          0,
        ),
          o.addEventListener(
            'mouseup',
            (m.mu = function () {
              s = 0;
            }),
            0,
          ),
          o.addEventListener(
            'mousemove',
            (m.mm = function (o) {
              s &&
                (((d = e.scroller || e).scrollLeft -= n = -i + (i = o.clientX)),
                (d.scrollTop -= t = -l + (l = o.clientY)),
                e == r.body &&
                  (((d = r.documentElement).scrollLeft -= n),
                  (d.scrollTop -= t)));
            }),
            0,
          );
      })(i[e++]);
    }
  };
  r.readyState == 'complete' ? l() : o.addEventListener('load', l, 0),
    (e.reset = l);
});
