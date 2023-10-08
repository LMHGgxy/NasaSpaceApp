import {
  S as E,
  P as L,
  W as j,
  G as P,
  A as D,
  D as I,
} from "./GLTFLoader.0e35ffa5.js";
var T = function (c, l) {
  var o = document.querySelector("#" + c + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: o, w: o.offsetWidth, h: o.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var e = this.pJS;
  l && Object.deepExtend(e, l),
    (e.tmp.obj = {
      size_value: e.particles.size.value,
      size_anim_speed: e.particles.size.anim.speed,
      move_speed: e.particles.move.speed,
      line_linked_distance: e.particles.line_linked.distance,
      line_linked_width: e.particles.line_linked.width,
      mode_grab_distance: e.interactivity.modes.grab.distance,
      mode_bubble_distance: e.interactivity.modes.bubble.distance,
      mode_bubble_size: e.interactivity.modes.bubble.size,
      mode_repulse_distance: e.interactivity.modes.repulse.distance,
    }),
    (e.fn.retinaInit = function () {
      e.retina_detect && window.devicePixelRatio > 1
        ? ((e.canvas.pxratio = window.devicePixelRatio), (e.tmp.retina = !0))
        : ((e.canvas.pxratio = 1), (e.tmp.retina = !1)),
        (e.canvas.w = e.canvas.el.offsetWidth * e.canvas.pxratio),
        (e.canvas.h = e.canvas.el.offsetHeight * e.canvas.pxratio),
        (e.particles.size.value = e.tmp.obj.size_value * e.canvas.pxratio),
        (e.particles.size.anim.speed =
          e.tmp.obj.size_anim_speed * e.canvas.pxratio),
        (e.particles.move.speed = e.tmp.obj.move_speed * e.canvas.pxratio),
        (e.particles.line_linked.distance =
          e.tmp.obj.line_linked_distance * e.canvas.pxratio),
        (e.interactivity.modes.grab.distance =
          e.tmp.obj.mode_grab_distance * e.canvas.pxratio),
        (e.interactivity.modes.bubble.distance =
          e.tmp.obj.mode_bubble_distance * e.canvas.pxratio),
        (e.particles.line_linked.width =
          e.tmp.obj.line_linked_width * e.canvas.pxratio),
        (e.interactivity.modes.bubble.size =
          e.tmp.obj.mode_bubble_size * e.canvas.pxratio),
        (e.interactivity.modes.repulse.distance =
          e.tmp.obj.mode_repulse_distance * e.canvas.pxratio);
    }),
    (e.fn.canvasInit = function () {
      e.canvas.ctx = e.canvas.el.getContext("2d");
    }),
    (e.fn.canvasSize = function () {
      (e.canvas.el.width = e.canvas.w),
        (e.canvas.el.height = e.canvas.h),
        e &&
          e.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (e.canvas.w = e.canvas.el.offsetWidth),
              (e.canvas.h = e.canvas.el.offsetHeight),
              e.tmp.retina &&
                ((e.canvas.w *= e.canvas.pxratio),
                (e.canvas.h *= e.canvas.pxratio)),
              (e.canvas.el.width = e.canvas.w),
              (e.canvas.el.height = e.canvas.h),
              e.particles.move.enable ||
                (e.fn.particlesEmpty(),
                e.fn.particlesCreate(),
                e.fn.particlesDraw(),
                e.fn.vendors.densityAutoParticles()),
              e.fn.vendors.densityAutoParticles();
          });
    }),
    (e.fn.canvasPaint = function () {
      e.canvas.ctx.fillRect(0, 0, e.canvas.w, e.canvas.h);
    }),
    (e.fn.canvasClear = function () {
      e.canvas.ctx.clearRect(0, 0, e.canvas.w, e.canvas.h);
    }),
    (e.fn.particle = function (t, i, a) {
      if (
        ((this.radius =
          (e.particles.size.random ? Math.random() : 1) *
          e.particles.size.value),
        e.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = e.particles.size.anim.speed / 100),
          e.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = a ? a.x : Math.random() * e.canvas.w),
        (this.y = a ? a.y : Math.random() * e.canvas.h),
        this.x > e.canvas.w - this.radius * 2
          ? (this.x = this.x - this.radius)
          : this.x < this.radius * 2 && (this.x = this.x + this.radius),
        this.y > e.canvas.h - this.radius * 2
          ? (this.y = this.y - this.radius)
          : this.y < this.radius * 2 && (this.y = this.y + this.radius),
        e.particles.move.bounce && e.fn.vendors.checkOverlap(this, a),
        (this.color = {}),
        typeof t.value == "object")
      )
        if (t.value instanceof Array) {
          var r =
            t.value[Math.floor(Math.random() * e.particles.color.value.length)];
          this.color.rgb = z(r);
        } else
          t.value.r != null &&
            t.value.g != null &&
            t.value.b != null &&
            (this.color.rgb = { r: t.value.r, g: t.value.g, b: t.value.b }),
            t.value.h != null &&
              t.value.s != null &&
              t.value.l != null &&
              (this.color.hsl = { h: t.value.h, s: t.value.s, l: t.value.l });
      else
        t.value == "random"
          ? (this.color.rgb = {
              r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
              g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
              b: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
            })
          : typeof t.value == "string" &&
            ((this.color = t), (this.color.rgb = z(this.color.value)));
      (this.opacity =
        (e.particles.opacity.random ? Math.random() : 1) *
        e.particles.opacity.value),
        e.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = e.particles.opacity.anim.speed / 100),
          e.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (e.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
          break;
      }
      e.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          e.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var s = e.particles.shape.type;
      if (typeof s == "object") {
        if (s instanceof Array) {
          var d = s[Math.floor(Math.random() * s.length)];
          this.shape = d;
        }
      } else this.shape = s;
      if (this.shape == "image") {
        var v = e.particles.shape;
        (this.img = {
          src: v.image.src,
          ratio: v.image.width / v.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          e.tmp.img_type == "svg" &&
            e.tmp.source_svg != null &&
            (e.fn.vendors.createSvgImg(this),
            e.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (e.fn.particle.prototype.draw = function () {
      var t = this;
      if (t.radius_bubble != null) var i = t.radius_bubble;
      else var i = t.radius;
      if (t.opacity_bubble != null) var a = t.opacity_bubble;
      else var a = t.opacity;
      if (t.color.rgb)
        var r =
          "rgba(" +
          t.color.rgb.r +
          "," +
          t.color.rgb.g +
          "," +
          t.color.rgb.b +
          "," +
          a +
          ")";
      else
        var r =
          "hsla(" +
          t.color.hsl.h +
          "," +
          t.color.hsl.s +
          "%," +
          t.color.hsl.l +
          "%," +
          a +
          ")";
      switch (
        ((e.canvas.ctx.fillStyle = r), e.canvas.ctx.beginPath(), t.shape)
      ) {
        case "circle":
          e.canvas.ctx.arc(t.x, t.y, i, 0, Math.PI * 2, !1);
          break;
        case "edge":
          e.canvas.ctx.rect(t.x - i, t.y - i, i * 2, i * 2);
          break;
        case "triangle":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            t.x - i,
            t.y + i / 1.66,
            i * 2,
            3,
            2
          );
          break;
        case "polygon":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            t.x - i / (e.particles.shape.polygon.nb_sides / 3.5),
            t.y - i / (2.66 / 3.5),
            (i * 2.66) / (e.particles.shape.polygon.nb_sides / 3),
            e.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            t.x - (i * 2) / (e.particles.shape.polygon.nb_sides / 4),
            t.y - i / ((2 * 2.66) / 3.5),
            (i * 2 * 2.66) / (e.particles.shape.polygon.nb_sides / 3),
            e.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          let s = function () {
            e.canvas.ctx.drawImage(
              n,
              t.x - i,
              t.y - i,
              i * 2,
              (i * 2) / t.img.ratio
            );
          };
          if (e.tmp.img_type == "svg") var n = t.img.obj;
          else var n = e.tmp.img_obj;
          n && s();
          break;
      }
      e.canvas.ctx.closePath(),
        e.particles.shape.stroke.width > 0 &&
          ((e.canvas.ctx.strokeStyle = e.particles.shape.stroke.color),
          (e.canvas.ctx.lineWidth = e.particles.shape.stroke.width),
          e.canvas.ctx.stroke()),
        e.canvas.ctx.fill();
    }),
    (e.fn.particlesCreate = function () {
      for (var t = 0; t < e.particles.number.value; t++)
        e.particles.array.push(
          new e.fn.particle(e.particles.color, e.particles.opacity.value)
        );
    }),
    (e.fn.particlesUpdate = function () {
      for (var t = 0; t < e.particles.array.length; t++) {
        var i = e.particles.array[t];
        if (e.particles.move.enable) {
          var a = e.particles.move.speed / 2;
          (i.x += i.vx * a), (i.y += i.vy * a);
        }
        if (
          (e.particles.opacity.anim.enable &&
            (i.opacity_status == !0
              ? (i.opacity >= e.particles.opacity.value &&
                  (i.opacity_status = !1),
                (i.opacity += i.vo))
              : (i.opacity <= e.particles.opacity.anim.opacity_min &&
                  (i.opacity_status = !0),
                (i.opacity -= i.vo)),
            i.opacity < 0 && (i.opacity = 0)),
          e.particles.size.anim.enable &&
            (i.size_status == !0
              ? (i.radius >= e.particles.size.value && (i.size_status = !1),
                (i.radius += i.vs))
              : (i.radius <= e.particles.size.anim.size_min &&
                  (i.size_status = !0),
                (i.radius -= i.vs)),
            i.radius < 0 && (i.radius = 0)),
          e.particles.move.out_mode == "bounce")
        )
          var r = {
            x_left: i.radius,
            x_right: e.canvas.w,
            y_top: i.radius,
            y_bottom: e.canvas.h,
          };
        else
          var r = {
            x_left: -i.radius,
            x_right: e.canvas.w + i.radius,
            y_top: -i.radius,
            y_bottom: e.canvas.h + i.radius,
          };
        switch (
          (i.x - i.radius > e.canvas.w
            ? ((i.x = r.x_left), (i.y = Math.random() * e.canvas.h))
            : i.x + i.radius < 0 &&
              ((i.x = r.x_right), (i.y = Math.random() * e.canvas.h)),
          i.y - i.radius > e.canvas.h
            ? ((i.y = r.y_top), (i.x = Math.random() * e.canvas.w))
            : i.y + i.radius < 0 &&
              ((i.y = r.y_bottom), (i.x = Math.random() * e.canvas.w)),
          e.particles.move.out_mode)
        ) {
          case "bounce":
            (i.x + i.radius > e.canvas.w || i.x - i.radius < 0) &&
              (i.vx = -i.vx),
              (i.y + i.radius > e.canvas.h || i.y - i.radius < 0) &&
                (i.vy = -i.vy);
            break;
        }
        if (
          (b("grab", e.interactivity.events.onhover.mode) &&
            e.fn.modes.grabParticle(i),
          (b("bubble", e.interactivity.events.onhover.mode) ||
            b("bubble", e.interactivity.events.onclick.mode)) &&
            e.fn.modes.bubbleParticle(i),
          (b("repulse", e.interactivity.events.onhover.mode) ||
            b("repulse", e.interactivity.events.onclick.mode)) &&
            e.fn.modes.repulseParticle(i),
          e.particles.line_linked.enable || e.particles.move.attract.enable)
        )
          for (var n = t + 1; n < e.particles.array.length; n++) {
            var s = e.particles.array[n];
            e.particles.line_linked.enable && e.fn.interact.linkParticles(i, s),
              e.particles.move.attract.enable &&
                e.fn.interact.attractParticles(i, s),
              e.particles.move.bounce && e.fn.interact.bounceParticles(i, s);
          }
      }
    }),
    (e.fn.particlesDraw = function () {
      e.canvas.ctx.clearRect(0, 0, e.canvas.w, e.canvas.h),
        e.fn.particlesUpdate();
      for (var t = 0; t < e.particles.array.length; t++) {
        var i = e.particles.array[t];
        i.draw();
      }
    }),
    (e.fn.particlesEmpty = function () {
      e.particles.array = [];
    }),
    (e.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(e.fn.checkAnimFrame),
        cancelRequestAnimFrame(e.fn.drawAnimFrame),
        (e.tmp.source_svg = void 0),
        (e.tmp.img_obj = void 0),
        (e.tmp.count_svg = 0),
        e.fn.particlesEmpty(),
        e.fn.canvasClear(),
        e.fn.vendors.start();
    }),
    (e.fn.interact.linkParticles = function (t, i) {
      var a = t.x - i.x,
        r = t.y - i.y,
        n = Math.sqrt(a * a + r * r);
      if (n <= e.particles.line_linked.distance) {
        var s =
          e.particles.line_linked.opacity -
          n /
            (1 / e.particles.line_linked.opacity) /
            e.particles.line_linked.distance;
        if (s > 0) {
          var d = e.particles.line_linked.color_rgb_line;
          (e.canvas.ctx.strokeStyle =
            "rgba(" + d.r + "," + d.g + "," + d.b + "," + s + ")"),
            (e.canvas.ctx.lineWidth = e.particles.line_linked.width),
            e.canvas.ctx.beginPath(),
            e.canvas.ctx.moveTo(t.x, t.y),
            e.canvas.ctx.lineTo(i.x, i.y),
            e.canvas.ctx.stroke(),
            e.canvas.ctx.closePath();
        }
      }
    }),
    (e.fn.interact.attractParticles = function (t, i) {
      var a = t.x - i.x,
        r = t.y - i.y,
        n = Math.sqrt(a * a + r * r);
      if (n <= e.particles.line_linked.distance) {
        var s = a / (e.particles.move.attract.rotateX * 1e3),
          d = r / (e.particles.move.attract.rotateY * 1e3);
        (t.vx -= s), (t.vy -= d), (i.vx += s), (i.vy += d);
      }
    }),
    (e.fn.interact.bounceParticles = function (t, i) {
      var a = t.x - i.x,
        r = t.y - i.y,
        n = Math.sqrt(a * a + r * r),
        s = t.radius + i.radius;
      n <= s &&
        ((t.vx = -t.vx), (t.vy = -t.vy), (i.vx = -i.vx), (i.vy = -i.vy));
    }),
    (e.fn.modes.pushParticles = function (t, i) {
      e.tmp.pushing = !0;
      for (var a = 0; a < t; a++)
        e.particles.array.push(
          new e.fn.particle(e.particles.color, e.particles.opacity.value, {
            x: i ? i.pos_x : Math.random() * e.canvas.w,
            y: i ? i.pos_y : Math.random() * e.canvas.h,
          })
        ),
          a == t - 1 &&
            (e.particles.move.enable || e.fn.particlesDraw(),
            (e.tmp.pushing = !1));
    }),
    (e.fn.modes.removeParticles = function (t) {
      e.particles.array.splice(0, t),
        e.particles.move.enable || e.fn.particlesDraw();
    }),
    (e.fn.modes.bubbleParticle = function (t) {
      if (
        e.interactivity.events.onhover.enable &&
        b("bubble", e.interactivity.events.onhover.mode)
      ) {
        let u = function () {
          (t.opacity_bubble = t.opacity), (t.radius_bubble = t.radius);
        };
        var i = t.x - e.interactivity.mouse.pos_x,
          a = t.y - e.interactivity.mouse.pos_y,
          r = Math.sqrt(i * i + a * a),
          n = 1 - r / e.interactivity.modes.bubble.distance;
        if (r <= e.interactivity.modes.bubble.distance) {
          if (n >= 0 && e.interactivity.status == "mousemove") {
            if (e.interactivity.modes.bubble.size != e.particles.size.value)
              if (e.interactivity.modes.bubble.size > e.particles.size.value) {
                var s = t.radius + e.interactivity.modes.bubble.size * n;
                s >= 0 && (t.radius_bubble = s);
              } else {
                var d = t.radius - e.interactivity.modes.bubble.size,
                  s = t.radius - d * n;
                s > 0 ? (t.radius_bubble = s) : (t.radius_bubble = 0);
              }
            if (
              e.interactivity.modes.bubble.opacity != e.particles.opacity.value
            )
              if (
                e.interactivity.modes.bubble.opacity > e.particles.opacity.value
              ) {
                var v = e.interactivity.modes.bubble.opacity * n;
                v > t.opacity &&
                  v <= e.interactivity.modes.bubble.opacity &&
                  (t.opacity_bubble = v);
              } else {
                var v =
                  t.opacity -
                  (e.particles.opacity.value -
                    e.interactivity.modes.bubble.opacity) *
                    n;
                v < t.opacity &&
                  v >= e.interactivity.modes.bubble.opacity &&
                  (t.opacity_bubble = v);
              }
          }
        } else u();
        e.interactivity.status == "mouseleave" && u();
      } else if (
        e.interactivity.events.onclick.enable &&
        b("bubble", e.interactivity.events.onclick.mode)
      ) {
        let u = function (m, w, p, x, g) {
          if (m != w)
            if (e.tmp.bubble_duration_end) {
              if (p != null) {
                var R =
                    x - (f * (x - m)) / e.interactivity.modes.bubble.duration,
                  q = m - R;
                (y = m + q),
                  g == "size" && (t.radius_bubble = y),
                  g == "opacity" && (t.opacity_bubble = y);
              }
            } else if (r <= e.interactivity.modes.bubble.distance) {
              if (p != null) var k = p;
              else var k = x;
              if (k != m) {
                var y =
                  x - (f * (x - m)) / e.interactivity.modes.bubble.duration;
                g == "size" && (t.radius_bubble = y),
                  g == "opacity" && (t.opacity_bubble = y);
              }
            } else
              g == "size" && (t.radius_bubble = void 0),
                g == "opacity" && (t.opacity_bubble = void 0);
        };
        if (e.tmp.bubble_clicking) {
          var i = t.x - e.interactivity.mouse.click_pos_x,
            a = t.y - e.interactivity.mouse.click_pos_y,
            r = Math.sqrt(i * i + a * a),
            f = (new Date().getTime() - e.interactivity.mouse.click_time) / 1e3;
          f > e.interactivity.modes.bubble.duration &&
            (e.tmp.bubble_duration_end = !0),
            f > e.interactivity.modes.bubble.duration * 2 &&
              ((e.tmp.bubble_clicking = !1), (e.tmp.bubble_duration_end = !1));
        }
        e.tmp.bubble_clicking &&
          (u(
            e.interactivity.modes.bubble.size,
            e.particles.size.value,
            t.radius_bubble,
            t.radius,
            "size"
          ),
          u(
            e.interactivity.modes.bubble.opacity,
            e.particles.opacity.value,
            t.opacity_bubble,
            t.opacity,
            "opacity"
          ));
      }
    }),
    (e.fn.modes.repulseParticle = function (t) {
      if (
        e.interactivity.events.onhover.enable &&
        b("repulse", e.interactivity.events.onhover.mode) &&
        e.interactivity.status == "mousemove"
      ) {
        var i = t.x - e.interactivity.mouse.pos_x,
          a = t.y - e.interactivity.mouse.pos_y,
          r = Math.sqrt(i * i + a * a),
          n = { x: i / r, y: a / r },
          s = e.interactivity.modes.repulse.distance,
          d = 100,
          v = J((1 / s) * (-1 * Math.pow(r / s, 2) + 1) * s * d, 0, 50),
          f = { x: t.x + n.x * v, y: t.y + n.y * v };
        e.particles.move.out_mode == "bounce"
          ? (f.x - t.radius > 0 && f.x + t.radius < e.canvas.w && (t.x = f.x),
            f.y - t.radius > 0 && f.y + t.radius < e.canvas.h && (t.y = f.y))
          : ((t.x = f.x), (t.y = f.y));
      } else if (
        e.interactivity.events.onclick.enable &&
        b("repulse", e.interactivity.events.onclick.mode)
      )
        if (
          (e.tmp.repulse_finish ||
            (e.tmp.repulse_count++,
            e.tmp.repulse_count == e.particles.array.length &&
              (e.tmp.repulse_finish = !0)),
          e.tmp.repulse_clicking)
        ) {
          let g = function () {
            var k = Math.atan2(m, u);
            if (
              ((t.vx = p * Math.cos(k)),
              (t.vy = p * Math.sin(k)),
              e.particles.move.out_mode == "bounce")
            ) {
              var y = { x: t.x + t.vx, y: t.y + t.vy };
              (y.x + t.radius > e.canvas.w || y.x - t.radius < 0) &&
                (t.vx = -t.vx),
                (y.y + t.radius > e.canvas.h || y.y - t.radius < 0) &&
                  (t.vy = -t.vy);
            }
          };
          var s = Math.pow(e.interactivity.modes.repulse.distance / 6, 3),
            u = e.interactivity.mouse.click_pos_x - t.x,
            m = e.interactivity.mouse.click_pos_y - t.y,
            w = u * u + m * m,
            p = (-s / w) * 1;
          w <= s && g();
        } else
          e.tmp.repulse_clicking == !1 && ((t.vx = t.vx_i), (t.vy = t.vy_i));
    }),
    (e.fn.modes.grabParticle = function (t) {
      if (
        e.interactivity.events.onhover.enable &&
        e.interactivity.status == "mousemove"
      ) {
        var i = t.x - e.interactivity.mouse.pos_x,
          a = t.y - e.interactivity.mouse.pos_y,
          r = Math.sqrt(i * i + a * a);
        if (r <= e.interactivity.modes.grab.distance) {
          var n =
            e.interactivity.modes.grab.line_linked.opacity -
            r /
              (1 / e.interactivity.modes.grab.line_linked.opacity) /
              e.interactivity.modes.grab.distance;
          if (n > 0) {
            var s = e.particles.line_linked.color_rgb_line;
            (e.canvas.ctx.strokeStyle =
              "rgba(" + s.r + "," + s.g + "," + s.b + "," + n + ")"),
              (e.canvas.ctx.lineWidth = e.particles.line_linked.width),
              e.canvas.ctx.beginPath(),
              e.canvas.ctx.moveTo(t.x, t.y),
              e.canvas.ctx.lineTo(
                e.interactivity.mouse.pos_x,
                e.interactivity.mouse.pos_y
              ),
              e.canvas.ctx.stroke(),
              e.canvas.ctx.closePath();
          }
        }
      }
    }),
    (e.fn.vendors.eventsListeners = function () {
      e.interactivity.detect_on == "window"
        ? (e.interactivity.el = window)
        : (e.interactivity.el = e.canvas.el),
        (e.interactivity.events.onhover.enable ||
          e.interactivity.events.onclick.enable) &&
          (e.interactivity.el.addEventListener("mousemove", function (t) {
            if (e.interactivity.el == window)
              var i = t.clientX,
                a = t.clientY;
            else
              var i = t.offsetX || t.clientX,
                a = t.offsetY || t.clientY;
            (e.interactivity.mouse.pos_x = i),
              (e.interactivity.mouse.pos_y = a),
              e.tmp.retina &&
                ((e.interactivity.mouse.pos_x *= e.canvas.pxratio),
                (e.interactivity.mouse.pos_y *= e.canvas.pxratio)),
              (e.interactivity.status = "mousemove");
          }),
          e.interactivity.el.addEventListener("mouseleave", function (t) {
            (e.interactivity.mouse.pos_x = null),
              (e.interactivity.mouse.pos_y = null),
              (e.interactivity.status = "mouseleave");
          })),
        e.interactivity.events.onclick.enable &&
          e.interactivity.el.addEventListener("click", function () {
            if (
              ((e.interactivity.mouse.click_pos_x =
                e.interactivity.mouse.pos_x),
              (e.interactivity.mouse.click_pos_y = e.interactivity.mouse.pos_y),
              (e.interactivity.mouse.click_time = new Date().getTime()),
              e.interactivity.events.onclick.enable)
            )
              switch (e.interactivity.events.onclick.mode) {
                case "push":
                  e.particles.move.enable ||
                  e.interactivity.modes.push.particles_nb == 1
                    ? e.fn.modes.pushParticles(
                        e.interactivity.modes.push.particles_nb,
                        e.interactivity.mouse
                      )
                    : e.interactivity.modes.push.particles_nb > 1 &&
                      e.fn.modes.pushParticles(
                        e.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  e.fn.modes.removeParticles(
                    e.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  e.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (e.tmp.repulse_clicking = !0),
                    (e.tmp.repulse_count = 0),
                    (e.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      e.tmp.repulse_clicking = !1;
                    }, e.interactivity.modes.repulse.duration * 1e3);
                  break;
              }
          });
    }),
    (e.fn.vendors.densityAutoParticles = function () {
      if (e.particles.number.density.enable) {
        var t = (e.canvas.el.width * e.canvas.el.height) / 1e3;
        e.tmp.retina && (t = t / (e.canvas.pxratio * 2));
        var i =
            (t * e.particles.number.value) /
            e.particles.number.density.value_area,
          a = e.particles.array.length - i;
        a < 0
          ? e.fn.modes.pushParticles(Math.abs(a))
          : e.fn.modes.removeParticles(a);
      }
    }),
    (e.fn.vendors.checkOverlap = function (t, i) {
      for (var a = 0; a < e.particles.array.length; a++) {
        var r = e.particles.array[a],
          n = t.x - r.x,
          s = t.y - r.y,
          d = Math.sqrt(n * n + s * s);
        d <= t.radius + r.radius &&
          ((t.x = i ? i.x : Math.random() * e.canvas.w),
          (t.y = i ? i.y : Math.random() * e.canvas.h),
          e.fn.vendors.checkOverlap(t));
      }
    }),
    (e.fn.vendors.createSvgImg = function (t) {
      var i = e.tmp.source_svg,
        a = /#([0-9A-F]{3,6})/gi,
        r = i.replace(a, function (f, u, m, w) {
          if (t.color.rgb)
            var p =
              "rgba(" +
              t.color.rgb.r +
              "," +
              t.color.rgb.g +
              "," +
              t.color.rgb.b +
              "," +
              t.opacity +
              ")";
          else
            var p =
              "hsla(" +
              t.color.hsl.h +
              "," +
              t.color.hsl.s +
              "%," +
              t.color.hsl.l +
              "%," +
              t.opacity +
              ")";
          return p;
        }),
        n = new Blob([r], { type: "image/svg+xml;charset=utf-8" }),
        s = window.URL || window.webkitURL || window,
        d = s.createObjectURL(n),
        v = new Image();
      v.addEventListener("load", function () {
        (t.img.obj = v),
          (t.img.loaded = !0),
          s.revokeObjectURL(d),
          e.tmp.count_svg++;
      }),
        (v.src = d);
    }),
    (e.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(e.fn.drawAnimFrame), o.remove(), (pJSDom = null);
    }),
    (e.fn.vendors.drawShape = function (t, i, a, r, n, s) {
      var d = n * s,
        v = n / s,
        f = (180 * (v - 2)) / v,
        u = Math.PI - (Math.PI * f) / 180;
      t.save(), t.beginPath(), t.translate(i, a), t.moveTo(0, 0);
      for (var m = 0; m < d; m++)
        t.lineTo(r, 0), t.translate(r, 0), t.rotate(u);
      t.fill(), t.restore();
    }),
    (e.fn.vendors.exportImg = function () {
      window.open(e.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (e.fn.vendors.loadImg = function (t) {
      if (((e.tmp.img_error = void 0), e.particles.shape.image.src != ""))
        if (t == "svg") {
          var i = new XMLHttpRequest();
          i.open("GET", e.particles.shape.image.src),
            (i.onreadystatechange = function (r) {
              i.readyState == 4 &&
                (i.status == 200
                  ? ((e.tmp.source_svg = r.currentTarget.response),
                    e.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (e.tmp.img_error = !0)));
            }),
            i.send();
        } else {
          var a = new Image();
          a.addEventListener("load", function () {
            (e.tmp.img_obj = a), e.fn.vendors.checkBeforeDraw();
          }),
            (a.src = e.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (e.tmp.img_error = !0);
    }),
    (e.fn.vendors.draw = function () {
      e.particles.shape.type == "image"
        ? e.tmp.img_type == "svg"
          ? e.tmp.count_svg >= e.particles.number.value
            ? (e.fn.particlesDraw(),
              e.particles.move.enable
                ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
                : cancelRequestAnimFrame(e.fn.drawAnimFrame))
            : e.tmp.img_error ||
              (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
          : e.tmp.img_obj != null
          ? (e.fn.particlesDraw(),
            e.particles.move.enable
              ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
              : cancelRequestAnimFrame(e.fn.drawAnimFrame))
          : e.tmp.img_error ||
            (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
        : (e.fn.particlesDraw(),
          e.particles.move.enable
            ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
            : cancelRequestAnimFrame(e.fn.drawAnimFrame));
    }),
    (e.fn.vendors.checkBeforeDraw = function () {
      e.particles.shape.type == "image"
        ? e.tmp.img_type == "svg" && e.tmp.source_svg == null
          ? (e.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(e.tmp.checkAnimFrame),
            e.tmp.img_error || (e.fn.vendors.init(), e.fn.vendors.draw()))
        : (e.fn.vendors.init(), e.fn.vendors.draw());
    }),
    (e.fn.vendors.init = function () {
      e.fn.retinaInit(),
        e.fn.canvasInit(),
        e.fn.canvasSize(),
        e.fn.canvasPaint(),
        e.fn.particlesCreate(),
        e.fn.vendors.densityAutoParticles(),
        (e.particles.line_linked.color_rgb_line = z(
          e.particles.line_linked.color
        ));
    }),
    (e.fn.vendors.start = function () {
      b("image", e.particles.shape.type)
        ? ((e.tmp.img_type = e.particles.shape.image.src.substr(
            e.particles.shape.image.src.length - 3
          )),
          e.fn.vendors.loadImg(e.tmp.img_type))
        : e.fn.vendors.checkBeforeDraw();
    }),
    e.fn.vendors.eventsListeners(),
    e.fn.vendors.start();
};
Object.deepExtend = function (c, l) {
  for (var o in l)
    l[o] && l[o].constructor && l[o].constructor === Object
      ? ((c[o] = c[o] || {}), Object.deepExtend(c[o], l[o]))
      : (c[o] = l[o]);
  return c;
};
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (c) {
      window.setTimeout(c, 1e3 / 60);
    }
  );
})();
window.cancelRequestAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout
  );
})();
function z(c) {
  var l = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  c = c.replace(l, function (e, t, i, a) {
    return t + t + i + i + a + a;
  });
  var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return o
    ? { r: parseInt(o[1], 16), g: parseInt(o[2], 16), b: parseInt(o[3], 16) }
    : null;
}
function J(c, l, o) {
  return Math.min(Math.max(c, l), o);
}
function b(c, l) {
  return l.indexOf(c) > -1;
}
window.pJSDom = [];
window.particlesJS = function (c, l) {
  typeof c != "string" && ((l = c), (c = "particles-js")),
    c || (c = "particles-js");
  var o = document.getElementById(c),
    e = "particles-js-canvas-el",
    t = o.getElementsByClassName(e);
  if (t.length) for (; t.length > 0; ) o.removeChild(t[0]);
  var i = document.createElement("canvas");
  (i.className = e), (i.style.width = "100%"), (i.style.height = "100%");
  var a = document.getElementById(c).appendChild(i);
  a != null && pJSDom.push(new T(c, l));
};
window.particlesJS.load = function (c, l, o) {
  var e = new XMLHttpRequest();
  e.open("GET", l),
    (e.onreadystatechange = function (t) {
      if (e.readyState == 4)
        if (e.status == 200) {
          var i = JSON.parse(t.currentTarget.response);
          window.particlesJS(c, i), o && o();
        } else
          console.log("Error pJS - XMLHttpRequest status: " + e.status),
            console.log("Error pJS - File config not found");
    }),
    e.send();
};
particlesJS.load("stars", "../particlesjs-config.json");
const O = "EARTH",
  C = "LUNA",
  H = `../3D MODELS/${C}/scene.gltf`,
  W = `../3D MODELS/${O}/scene.gltf`,
  U = 0.004,
  S = new E(),
  A = new L(115, window.innerWidth / window.innerHeight, 0.1, 5e4),
  M = new j({ alpha: !0 }),
  X = new P();
A.position.z = 1550;
M.setSize(window.innerWidth, window.innerHeight);
document.getElementById("TIERRITA").appendChild(M.domElement);
let _;
const B = new P();
let h;
X.load(
  W,
  function (c) {
    (_ = c.scene), S.add(_), console.log(_), N();
  },
  function (c) {
    console.log((c.loaded / c.total) * 100 + "% loaded");
  },
  function (c) {
    console.error(c);
  }
);
B.load(
  H,
  function (c) {
    (h = c.scene), _.add(h);
    const l = new D(16777215, 10);
    h.add(l);
    const o = new I(16777215, 25);
    o.position.set(0, 0, 0),
      h.add(o),
      (h.scale.x = 0.5),
      (h.scale.y = 0.5),
      (h.scale.z = 0.5),
      (h.position.x = -950);
  },
  function (c) {
    console.log((c.loaded / c.total) * 100 + "% loaded");
  },
  function (c) {
    console.error(c);
  }
);
window.addEventListener("resize", function () {
  (A.aspect = window.innerWidth / window.innerHeight),
    A.updateProjectionMatrix(),
    M.setSize(window.innerWidth, window.innerHeight);
});
function F() {
  requestAnimationFrame(F),
    _ && (_.rotation.y += U),
    h && h.rotateY(0.007),
    M.render(S, A);
}
function N() {
  F();
}
