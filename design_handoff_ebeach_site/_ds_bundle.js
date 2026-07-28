/* @ds-bundle: {"format":4,"namespace":"EBEACHDesignSystem_3fff58","components":[{"name":"GrainOverlay","sourcePath":"components/brand/GrainOverlay.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"ScrollCue","sourcePath":"components/brand/ScrollCue.jsx"},{"name":"WaveDivider","sourcePath":"components/brand/WaveDivider.jsx"},{"name":"CollectionCard","sourcePath":"components/commerce/CollectionCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SpecRow","sourcePath":"components/commerce/SpecRow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SwatchPicker","sourcePath":"components/forms/SwatchPicker.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/GrainOverlay.jsx":"6916de189249","components/brand/Logo.jsx":"8bc60602e64f","components/brand/Marquee.jsx":"0bb0df4125e7","components/brand/ScrollCue.jsx":"6c78ed3cdb57","components/brand/WaveDivider.jsx":"556eda3707a0","components/commerce/CollectionCard.jsx":"84b227d046ea","components/commerce/ProductCard.jsx":"efd97efbc59c","components/commerce/SpecRow.jsx":"6c1085cc0e95","components/core/Badge.jsx":"3fddb6e7c6b3","components/core/Button.jsx":"1e194a9fa340","components/core/Icon.jsx":"5e5c23bb8d2a","components/core/IconButton.jsx":"a85255b58794","components/core/SectionLabel.jsx":"ef27b8b368ea","components/core/Tag.jsx":"5b80b24a87e2","components/forms/Checkbox.jsx":"81e07fd63ce4","components/forms/Input.jsx":"bd589ef6353e","components/forms/Select.jsx":"46b5e2346594","components/forms/SwatchPicker.jsx":"295d76828742","components/forms/Switch.jsx":"3bb02ffeb27f","ui_kits/website/Anatomy.jsx":"81e85e1d7322","ui_kits/website/Collections.jsx":"4030e4e1989b","ui_kits/website/Configurator.jsx":"16e45c88d381","ui_kits/website/Gallery.jsx":"325f5c043d5e","ui_kits/website/Glasses.jsx":"077fd1ae888a","ui_kits/website/Hero.jsx":"01ae82b17a95","ui_kits/website/Manifesto.jsx":"4475ad49bc42","ui_kits/website/ProductFlip.jsx":"1de3c5c96967","ui_kits/website/Proof.jsx":"3d81bb0da067","ui_kits/website/ScrollVideo.jsx":"5bd7f275f500","ui_kits/website/SiteFooter.jsx":"7004a7b2485e","ui_kits/website/SiteHeader.jsx":"49121dbca90b","ui_kits/website/app.jsx":"a7ace9b4adc9","ui_kits/website/hooks.jsx":"03afa399553d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EBEACHDesignSystem_3fff58 = window.EBEACHDesignSystem_3fff58 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GrainOverlay.jsx
try { (() => {
/** Fixed sand-grain film over the whole viewport. Mount once, at the app root. */
function GrainOverlay({
  opacity = 0.045,
  blend = 'multiply'
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      opacity,
      mixBlendMode: blend,
      backgroundImage: 'var(--grain-url)'
    }
  });
}
Object.assign(__ds_scope, { GrainOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GrainOverlay.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const SRC = {
  ink: {
    full: 'assets/logo-ink.png',
    mark: 'assets/mark-ink.png'
  },
  foam: {
    full: 'assets/logo-foam.png',
    mark: 'assets/mark-foam.png'
  }
};

/** The E-BEACH wordmark. Never recolour, distort or overlay a gradient. */
function Logo({
  tone = 'ink',
  variant = 'full',
  height = 28,
  base = '',
  alt = 'E-BEACH'
}) {
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + SRC[tone][variant];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      userSelect: 'none'
    },
    draggable: "false"
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
/** Infinite horizontal ticker — testimonials, collection names, brand phrases. */
function Marquee({
  items = [],
  speed = 42,
  separator = '·',
  onDark = false,
  children
}) {
  const content = children || items;
  const id = React.useId ? React.useId().replace(/:/g, '') : 'mq';
  const row = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-7)',
      paddingRight: 'var(--sp-7)',
      flex: '0 0 auto'
    }
  }, (Array.isArray(content) ? content : [content]).map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: onDark ? 'var(--sun-400)' : 'var(--sun-500)'
    }
  }, separator))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      width: '100%',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `eb-mq-${id} ${speed}s linear infinite`
    }
  }, row, row), /*#__PURE__*/React.createElement("style", null, `@keyframes eb-mq-${id}{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScrollCue.jsx
try { (() => {
/** Hero scroll indicator: a thin line whose fill drifts downward on a loop. */
function ScrollCue({
  label = 'Role',
  onDark = false
}) {
  const c = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const id = React.useId ? React.useId().replace(/:/g, '') : 'sc';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 1,
      height: 56,
      background: 'currentColor',
      opacity: 0.3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      width: 1,
      height: 22,
      background: onDark ? 'var(--sun-400)' : 'var(--sun-500)',
      animation: `eb-drift-${id} 1.9s var(--ease-swell) infinite`
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes eb-drift-${id}{0%{transform:translateY(-24px)}100%{transform:translateY(56px)}}
      @media (prefers-reduced-motion: reduce){[style*="eb-drift-${id}"]{animation:none!important}}`));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/brand/WaveDivider.jsx
try { (() => {
/** Animated wave seam between a light section and the abyssal footer. */
function WaveDivider({
  fill = 'var(--sea-900)',
  height = 90,
  speed = 14,
  flip = false
}) {
  const id = React.useId ? React.useId().replace(/:/g, '') : 'wv';
  const d = 'M0,40 C160,90 320,0 480,40 C640,80 800,10 960,40 C1120,70 1280,20 1440,40 L1440,120 L0,120 Z';
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      lineHeight: 0,
      transform: flip ? 'scaleY(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 120",
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      width: '100%',
      height
    }
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      animation: `eb-wave-${id} ${speed}s linear infinite`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: fill,
    transform: "translate(1440,0)"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes eb-wave-${id}{from{transform:translateX(0)}to{transform:translateX(-1440px)}}`)));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CollectionCard.jsx
try { (() => {
/** Tall editorial panel for a collection, with an overlay that opens on hover. */
function CollectionCard({
  title,
  index,
  blurb,
  image,
  accent = 'var(--sun-500)',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      background: 'var(--sea-700)',
      aspectRatio: '3 / 4',
      cursor: 'pointer',
      color: 'var(--text-on-dark)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-tide)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'var(--sp-6)'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: accent
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-display-s)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: 'var(--tr-display)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)',
      margin: '8px 0 0'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maxHeight: hover ? 120 : 0,
      opacity: hover ? 1 : 0,
      transition: 'max-height var(--dur-base) var(--ease-tide), opacity var(--dur-base) var(--ease-tide)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)'
    }
  }, blurb))));
}
Object.assign(__ds_scope, { CollectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CollectionCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SpecRow.jsx
try { (() => {
/** One line of the product anatomy / spec table. */
function SpecRow({
  term,
  value,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      padding: '14px 0',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, term), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      textAlign: 'right',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, value));
}
Object.assign(__ds_scope, { SpecRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SpecRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  sun: {
    background: 'var(--sun-400)',
    color: 'var(--sea-900)'
  },
  sea: {
    background: 'var(--sea-400)',
    color: 'var(--sea-900)'
  },
  sand: {
    background: 'var(--sand-300)',
    color: 'var(--sea-900)'
  },
  deep: {
    background: 'var(--sea-900)',
    color: 'var(--sand-050)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
  }
};

/** Small status flag: NOVO, ESGOTADO, EDIÇÃO LIMITADA. */
function Badge({
  children,
  tone = 'sun'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--r-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      ...TONES[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/** Product tile: flat image field, hairline rule, no drop shadow. */
function ProductCard({
  name,
  subtitle,
  price,
  image,
  badge,
  tone = 'sand',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'deep';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      background: dark ? 'var(--sea-700)' : 'var(--sand-200)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-tide)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--sp-4)',
      left: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sun"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      paddingTop: 'var(--sp-4)',
      marginTop: 'var(--sp-4)',
      borderTop: '1px solid ' + (dark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)')
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.125rem',
      letterSpacing: 'var(--tr-title)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '10px 18px',
    fontSize: '13px',
    minHeight: 38
  },
  md: {
    padding: '14px 26px',
    fontSize: '14px',
    minHeight: 48
  },
  lg: {
    padding: '18px 36px',
    fontSize: '15px',
    minHeight: 58
  }
};
const VARIANTS = {
  solid: {
    background: 'var(--accent-primary)',
    color: 'var(--sea-900)',
    border: '1px solid transparent'
  },
  sea: {
    background: 'var(--accent-secondary)',
    color: 'var(--sea-900)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid transparent'
  },
  onDark: {
    background: 'var(--sand-050)',
    color: 'var(--sea-900)',
    border: '1px solid transparent'
  },
  outlineDark: {
    background: 'transparent',
    color: 'var(--sand-050)',
    border: '1px solid var(--border-hairline-dark)'
  }
};
const HOVER = {
  solid: 'var(--accent-primary-hover)',
  sea: 'var(--accent-secondary-hover)',
  outline: 'var(--sea-900)',
  ghost: 'rgba(10,10,10,0.06)',
  onDark: 'var(--sand-300)',
  outlineDark: 'rgba(253,252,249,0.10)'
};

/** Primary action. Liquid fill on hover, magnetic nudge on pointer move. */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  magnetic = false,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  icon,
  iconAfter,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [offset, setOffset] = React.useState({
    x: 0,
    y: 0
  });
  const ref = React.useRef(null);
  const v = VARIANTS[variant] || VARIANTS.solid;
  const s = SIZES[size] || SIZES.md;
  const move = e => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.22,
      y: (e.clientY - (r.top + r.height / 2)) * 0.28
    });
  };
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    href: href,
    onClick: onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseMove: move,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setOffset({
        x: 0,
        y: 0
      });
    },
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-3)',
      font: 'var(--type-label)',
      fontSize: s.fontSize,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-body)',
      padding: s.padding,
      minHeight: s.minHeight,
      borderRadius: 'var(--r-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      textDecoration: 'none',
      borderBottom: v.border,
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide), transform var(--dur-base) var(--ease-tide)',
      ...v,
      background: hover && !disabled ? HOVER[variant] : v.background,
      color: hover && !disabled && variant === 'outline' ? 'var(--sand-050)' : v.color
    }
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Lucide glyph wrapper. Requires the Lucide UMD script on the page. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-ish circular icon-only control (close, arrows, play). */
function IconButton({
  name,
  label,
  size = 'md',
  tone = 'ink',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 36,
    md: 44,
    lg: 56
  }[size] || 44;
  const tones = {
    ink: {
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-strong)',
      bg: hover ? 'var(--sea-900)' : 'transparent',
      fg: hover ? 'var(--sand-050)' : 'var(--text-strong)'
    },
    foam: {
      border: '1px solid var(--border-hairline-dark)',
      color: 'var(--sand-050)',
      bg: hover ? 'var(--sand-050)' : 'transparent',
      fg: hover ? 'var(--sea-900)' : 'var(--sand-050)'
    },
    sun: {
      border: '1px solid transparent',
      color: 'var(--sea-900)',
      bg: hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)',
      fg: 'var(--sea-900)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      borderRadius: 'var(--r-pill)',
      border: tones.border,
      background: tones.bg,
      color: tones.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide)'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 'lg' ? 22 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/** Numbered eyebrow that opens every narrative section. */
function SectionLabel({
  index,
  children,
  onDark = false
}) {
  const c = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      color: c,
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--sun-400)' : 'var(--sun-500)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'currentColor',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Filter / attribute chip. Toggles between hairline and filled. */
function Tag({
  children,
  active = false,
  onClick,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    type: "button",
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '9px 16px',
      minHeight: 34,
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'transparent' : onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
      background: active ? onDark ? 'var(--sand-050)' : 'var(--sea-900)' : 'transparent',
      color: active ? onDark ? 'var(--sea-900)' : 'var(--sand-050)' : onDark ? 'var(--sand-050)' : 'var(--text-body)',
      transition: 'all var(--dur-fast) var(--ease-tide)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square 18px checkbox, sun fill when checked. */
function Checkbox({
  label,
  checked = false,
  onChange,
  onDark = false,
  id
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-3)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      lineHeight: 1.5,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: 'var(--r-sm)',
      border: '1px solid ' + (checked ? 'transparent' : onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
      background: checked ? 'var(--accent-primary)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sea-900)',
      transition: 'all var(--dur-fast) var(--ease-tide)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Underline-only text field — no boxes anywhere in E-BEACH forms. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  onDark = false,
  hint,
  error,
  id
}) {
  const [focus, setFocus] = React.useState(false);
  const fg = onDark ? 'var(--sand-050)' : 'var(--text-strong)';
  const line = error ? 'var(--sun-600)' : focus ? 'var(--sea-400)' : onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginBottom: 'var(--sp-3)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid ' + line,
      padding: '10px 0 12px',
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-l)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-tide)'
    }
  }), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--sp-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--sun-600)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Underline select, matching Input. */
function Select({
  label,
  value,
  onChange,
  options = [],
  onDark = false,
  id
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginBottom: 'var(--sp-3)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: '100%',
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid ' + (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
      padding: '10px 28px 12px 0',
      color: onDark ? 'var(--sand-050)' : 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-l)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: onDark ? 'var(--sand-050)' : 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SwatchPicker.jsx
try { (() => {
/** Color chooser for frame and lens in the configurator. */
function SwatchPicker({
  label,
  options = [],
  value,
  onChange,
  onDark = false,
  size = 40
}) {
  const active = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label), active && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, active.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      title: o.label,
      "aria-label": o.label,
      "aria-pressed": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        width: size,
        height: size,
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        padding: 3,
        background: 'transparent',
        border: '1px solid ' + (on ? onDark ? 'var(--sand-050)' : 'var(--sea-900)' : 'transparent'),
        transition: 'border-color var(--dur-fast) var(--ease-tide), transform var(--dur-fast) var(--ease-tide)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: 'var(--r-pill)',
        background: o.swatch,
        boxShadow: 'inset 0 0 0 1px rgba(10,10,10,0.10)'
      }
    }));
  })));
}
Object.assign(__ds_scope, { SwatchPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SwatchPicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Pill toggle — used for polarized/UV options and reduced-motion preference. */
function Switch({
  checked = false,
  onChange,
  label,
  onDark = false,
  id
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      borderRadius: 'var(--r-pill)',
      padding: 3,
      flex: '0 0 auto',
      background: checked ? 'var(--sea-400)' : onDark ? 'rgba(253,252,249,0.18)' : 'rgba(10,10,10,0.14)',
      transition: 'background var(--dur-fast) var(--ease-tide)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: 'var(--r-pill)',
      background: 'var(--sand-050)',
      transform: checked ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-tide)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Anatomy.jsx
try { (() => {
const {
  SectionLabel,
  SpecRow
} = window.EBEACHDesignSystem_3fff58;
const PARTS = [{
  at: 0.05,
  side: 'left',
  top: '28%',
  title: 'Lente polarizada UV400',
  body: 'Espelhada, com filtro de 100% dos raios UVA/UVB e corte de reflexo na água.'
}, {
  at: 0.30,
  side: 'right',
  top: '44%',
  title: 'Haste em acetato',
  body: 'Acetato italiano prensado, degradê preto → cristal, polido à mão.'
}, {
  at: 0.55,
  side: 'left',
  top: '62%',
  title: 'Dobradiça flex',
  body: 'Cinco barras em aço inox 316L, testada em 20 mil ciclos.'
}, {
  at: 0.78,
  side: 'right',
  top: '22%',
  title: 'Ponte 18 mm',
  body: 'Apoio nasal ajustado ao rosto brasileiro.'
}];
function Anatomy() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const reduced = window.useReducedMotion();
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Anatomia",
    style: {
      height: '400vh',
      background: 'var(--sand-200)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(var(--header-h) + var(--sp-6))',
      left: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 3
  }, "Anatomia do produto")), /*#__PURE__*/React.createElement(ScrollVideo, {
    t: reduced ? 0.5 : window.range(p, 0.15, 0.95),
    src: "../../assets/video/turntable.mp4",
    width: 620,
    aspect: "4 / 3",
    zoom: 1.34,
    fallback: /*#__PURE__*/React.createElement(ProductFlip, {
      t: reduced ? 1 : window.range(p, 0.18, 0.92),
      width: 560,
      base: "../.."
    })
  }), PARTS.map((part, i) => {
    const on = reduced || p > part.at;
    const isLeft = part.side === 'left';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        top: part.top,
        [isLeft ? 'left' : 'right']: 'var(--gutter)',
        maxWidth: 260,
        textAlign: isLeft ? 'right' : 'left',
        opacity: on ? 1 : 0,
        transform: on ? 'translateX(0)' : `translateX(${isLeft ? -20 : 20}px)`,
        transition: 'opacity var(--dur-base) var(--ease-tide), transform var(--dur-base) var(--ease-tide)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--sea-700)',
        width: on ? 140 : 0,
        marginLeft: isLeft ? 'auto' : 0,
        marginBottom: 12,
        transition: 'width var(--dur-slow) var(--ease-drift)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 'var(--tr-title)',
        color: 'var(--text-strong)'
      }
    }, part.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: 'var(--fs-caption)',
        lineHeight: 1.55,
        color: 'var(--text-muted)'
      }
    }, part.body));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--gutter)',
      bottom: 'var(--sp-7)',
      width: 260
    }
  }, /*#__PURE__*/React.createElement(SpecRow, {
    term: "Peso",
    value: "24 g"
  }), /*#__PURE__*/React.createElement(SpecRow, {
    term: "Garantia",
    value: "2 anos"
  }))));
}
Object.assign(window, {
  Anatomy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Anatomy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Collections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionLabel,
  CollectionCard
} = window.EBEACHDesignSystem_3fff58;
const P = '../../assets/placeholders/';
const COLS = [{
  title: 'Maré',
  blurb: 'Acetato translúcido e lente verde-mar. Para quem entra na água antes do café.',
  image: P + 'sea-shallow.png'
}, {
  title: 'Duna',
  blurb: 'Armação areia quente, lente âmbar. Luz seca, vento de terra.',
  image: P + 'dune.png'
}, {
  title: 'Sol poente',
  blurb: 'Degradê fumê sobre acetato âmbar. A última hora de luz.',
  image: P + 'sunset.png'
}, {
  title: 'Recife',
  blurb: 'Abissal com lente espelhada. Feita para o reflexo mais duro.',
  image: P + 'reef.png'
}];
function Collections() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(max-width: 860px)');
    const h = () => setMobile(m.matches);
    h();
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  }, []);
  if (mobile) {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Cole\xE7\xF5es",
      style: {
        background: 'var(--sea-700)',
        padding: 'var(--section-y) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--gutter) var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      index: 4,
      onDark: true
    }, "Cole\xE7\xF5es")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-4)',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        padding: '0 var(--gutter)'
      }
    }, COLS.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        flex: '0 0 76%',
        scrollSnapAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(CollectionCard, _extends({
      index: i + 1
    }, c))))));
  }
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Cole\xE7\xF5es",
    style: {
      height: '360vh',
      background: 'var(--sea-700)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter) var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 4,
    onDark: true
  }, "Cole\xE7\xF5es")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      padding: '0 var(--gutter)',
      width: 'max-content',
      transform: `translateX(calc(${-p * 62}vw))`,
      willChange: 'transform'
    }
  }, COLS.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      width: '30vw',
      minWidth: 300
    }
  }, /*#__PURE__*/React.createElement(CollectionCard, _extends({
    index: i + 1
  }, c)))))));
}
Object.assign(window, {
  Collections
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Collections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Configurator.jsx
try { (() => {
const {
  SectionLabel,
  SwatchPicker,
  Button,
  Switch,
  Badge,
  Icon
} = window.EBEACHDesignSystem_3fff58;
const FRAMES = [{
  value: 'abissal',
  label: 'Abissal',
  swatch: '#06222D',
  hex: '#06222D'
}, {
  value: 'areia',
  label: 'Areia quente',
  swatch: '#E4C9A0',
  hex: '#E4C9A0'
}, {
  value: 'mar',
  label: 'Mar profundo',
  swatch: '#0E5C73',
  hex: '#0E5C73'
}, {
  value: 'tinta',
  label: 'Tinta',
  swatch: '#0A0A0A',
  hex: '#0A0A0A'
}];
const LENSES = [{
  value: 'ambar',
  label: 'Âmbar',
  swatch: '#F5A623',
  css: 'linear-gradient(160deg,#FFC46B,#E0701F)',
  add: 0
}, {
  value: 'verde',
  label: 'Verde-mar',
  swatch: '#2AA7A0',
  css: 'linear-gradient(160deg,#7FD3CE,#0E5C73)',
  add: 0
}, {
  value: 'espelhada',
  label: 'Espelhada',
  swatch: 'linear-gradient(135deg,#7FD3CE,#F5A623)',
  css: 'linear-gradient(135deg,#BFE9EE,#F5A623 55%,#2AA7A0)',
  add: 60
}, {
  value: 'fume',
  label: 'Degradê fumê',
  swatch: 'linear-gradient(180deg,#5E635F,#E4C9A0)',
  css: 'linear-gradient(180deg,#2C2E2E,#CFAE7F)',
  add: 40
}];
const BASE = 389;
function Configurator({
  onAdd
}) {
  const [frame, setFrame] = React.useState('abissal');
  const [lens, setLens] = React.useState('verde');
  const [pol, setPol] = React.useState(true);
  const f = FRAMES.find(x => x.value === frame);
  const l = LENSES.find(x => x.value === lens);
  const price = BASE + l.add + (pol ? 50 : 0);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Configurador",
    style: {
      background: 'var(--sand-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 5
  }, "Configurador"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(300px,0.75fr)',
      gap: 'var(--sp-9)',
      alignItems: 'center',
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sand-200)',
      borderRadius: 'var(--r-xl)',
      aspectRatio: '4 / 3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--sp-5)',
      left: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun"
  }, "Monte o seu")), /*#__PURE__*/React.createElement("div", {
    style: {
      transition: 'filter var(--dur-base) var(--ease-tide)'
    }
  }, /*#__PURE__*/React.createElement(GlassesFigure, {
    width: 420,
    frame: f.hex,
    lens: l.css
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-s)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: 'var(--tr-display)',
      textTransform: 'uppercase',
      margin: 0
    }
  }, "Mar\xE9 01"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 var(--sp-6)',
      color: 'var(--text-muted)',
      maxWidth: '38ch'
    }
  }, "Escolha arma\xE7\xE3o e lente. Cada pe\xE7a \xE9 montada sob encomenda em 5 dias \xFAteis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(SwatchPicker, {
    label: "Arma\xE7\xE3o",
    value: frame,
    onChange: setFrame,
    options: FRAMES
  }), /*#__PURE__*/React.createElement(SwatchPicker, {
    label: "Lente",
    value: lens,
    onChange: setLens,
    options: LENSES
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: pol,
    onChange: setPol,
    label: "Polariza\xE7\xE3o + R$ 50"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      margin: 'var(--sp-7) 0 var(--sp-5)',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)'
    }
  }, window.BRL(price))), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    fullWidth: true,
    magnetic: true,
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 16
    }),
    onClick: () => onAdd({
      name: 'Maré 01',
      frame: f.hex,
      lens: l.css,
      frameLabel: f.label,
      lensLabel: l.label,
      price
    })
  }, "Adicionar \xE0 sacola"))));
}
Object.assign(window, {
  Configurator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Configurator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
const {
  SectionLabel
} = window.EBEACHDesignSystem_3fff58;
const P = '../../assets/placeholders/';
const SHOTS = [{
  src: P + 'sand.png',
  speed: 0.10,
  col: '1 / 5',
  ratio: '3 / 4',
  label: 'Ubatuba, 07h'
}, {
  src: P + 'sea-shallow.png',
  speed: 0.26,
  col: '5 / 9',
  ratio: '1 / 1',
  label: 'Itacaré'
}, {
  src: P + 'sunset.png',
  speed: 0.04,
  col: '9 / 13',
  ratio: '4 / 5',
  label: 'Jericoacoara'
}, {
  src: P + 'reef.png',
  speed: 0.20,
  col: '2 / 7',
  ratio: '16 / 10',
  label: 'Fernando de Noronha'
}, {
  src: P + 'dune.png',
  speed: 0.34,
  col: '8 / 12',
  ratio: '3 / 4',
  label: 'Genipabu'
}];
function Gallery() {
  const ref = React.useRef(null);
  const p = window.useScrollProgress(ref);
  const reduced = window.useReducedMotion();
  const [cursor, setCursor] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Galeria",
    onMouseMove: e => setCursor({
      x: e.clientX,
      y: e.clientY
    }),
    onMouseLeave: () => setCursor(null),
    style: {
      background: 'var(--sand-050)',
      padding: 'var(--section-y) var(--gutter)',
      position: 'relative',
      cursor: cursor ? 'none' : 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 6
  }, "Na luz real"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 'var(--sp-5)',
      marginTop: 'var(--sp-7)',
      rowGap: 'var(--sp-8)'
    }
  }, SHOTS.map((s, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      gridColumn: s.col,
      margin: 0,
      transform: reduced ? 'none' : `translateY(${(0.5 - p) * s.speed * 420}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      aspectRatio: s.ratio
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--sp-3)',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.label)))), cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: cursor.x,
      top: cursor.y,
      zIndex: 80,
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      width: 84,
      height: 84,
      borderRadius: 999,
      background: 'var(--sun-500)',
      color: 'var(--sea-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      fontSize: 10
    }
  }, "Arraste"));
}
Object.assign(window, {
  Gallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Glasses.jsx
try { (() => {
// Geometric stand-in for the E-BEACH product shot. Replace with real photography.
function GlassesFigure({
  width = 520,
  frame = '#06222D',
  lens = 'linear-gradient(160deg,#7FD3CE,#0E5C73)',
  rotate = 0,
  opacity = 1
}) {
  const u = width / 520;
  const lensW = 196 * u,
    lensH = 150 * u,
    bar = 13 * u;
  const lensStyle = {
    width: lensW,
    height: lensH,
    borderRadius: `${44 * u}px ${52 * u}px ${64 * u}px ${40 * u}px`,
    border: `${bar}px solid ${frame}`,
    background: lens,
    boxShadow: 'inset 0 8px 26px rgba(255,255,255,0.22), inset 0 -14px 30px rgba(6,34,45,0.35)'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": "\xD3culos E-BEACH",
    style: {
      width,
      opacity,
      perspective: 1400,
      transform: `rotateY(${rotate}deg)`,
      transformStyle: 'preserve-3d',
      transition: 'transform 120ms linear'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -46 * u,
      top: '34%',
      width: 60 * u,
      height: bar,
      background: frame,
      borderRadius: bar,
      transform: 'rotate(-6deg)',
      transformOrigin: 'right center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: lensStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46 * u,
      height: bar,
      background: frame,
      borderRadius: bar,
      transform: `translateY(-${30 * u}px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: lensStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -46 * u,
      top: '34%',
      width: 60 * u,
      height: bar,
      background: frame,
      borderRadius: bar,
      transform: 'rotate(6deg)',
      transformOrigin: 'left center'
    }
  })));
}
Object.assign(window, {
  GlassesFigure
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Glasses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  ScrollCue
} = window.EBEACHDesignSystem_3fff58;
function Hero() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const reduced = window.useReducedMotion();
  const t = reduced ? 1 : p;
  const scale = window.lerp(2.35, 1, window.range(t, 0, 0.88));
  const sky = window.range(t, 0.1, 0.9);
  const wordOpacity = window.range(t, 0.34, 0.92);
  const wordScale = window.lerp(0.88, 1, window.range(t, 0.3, 1));
  const drift = window.lerp(-4, 3, t);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Hero",
    style: {
      height: '360vh',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-dark-section": t < 0.55 ? '' : undefined,
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      background: `linear-gradient(180deg, color-mix(in oklab, #BFE9EE ${100 - sky * 100}%, #F5E9D7) 0%, color-mix(in oklab, #E8F3EC ${100 - sky * 100}%, #E4C9A0) 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'absolute',
      margin: 0,
      width: '100%',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(4rem, 19vw, 17rem)',
      letterSpacing: '-0.05em',
      lineHeight: 0.82,
      color: 'var(--sea-900)',
      opacity: wordOpacity * 0.92,
      transform: `scale(${wordScale})`,
      textTransform: 'uppercase',
      userSelect: 'none'
    }
  }, "E BEACH"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transform: `scale(${scale}) translateY(${drift}%)`,
      willChange: 'transform'
    }
  }, /*#__PURE__*/React.createElement(ScrollVideo, {
    t: t,
    src: "../../assets/video/turntable.mp4",
    width: 720,
    aspect: "4 / 3",
    zoom: 1.34,
    fallback: /*#__PURE__*/React.createElement(ProductFlip, {
      t: t,
      width: 640,
      base: "../.."
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter)',
      bottom: 'var(--sp-8)',
      maxWidth: 340,
      opacity: window.range(t, 0.55, 0.9)
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-l)',
      color: 'var(--sea-900)',
      lineHeight: 1.5
    }
  }, "\xD3culos feitos para a luz do Brasil. Lente polarizada UV400, acetato italiano, montagem no litoral paulista.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--gutter)',
      bottom: 'var(--sp-8)',
      textAlign: 'right',
      opacity: window.range(t, 0.55, 0.9)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Mar\xE9 01 \xB7 Degrad\xEA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: '-0.03em',
      color: 'var(--sea-900)'
    }
  }, "R$ 389")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--sp-7)',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: 1 - window.range(t, 0.5, 0.8)
    }
  }, /*#__PURE__*/React.createElement(ScrollCue, {
    label: "Role"
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Manifesto.jsx
try { (() => {
const {
  SectionLabel
} = window.EBEACHDesignSystem_3fff58;
const MANIFESTO = 'O sal marca. A luz insiste. O horizonte não pede licença. Fizemos um óculos para quem encara os três de frente, todo dia, sem apertar os olhos.'.split(' ');
function Manifesto() {
  const ref = React.useRef(null);
  const p = window.useScrollProgress(ref);
  const reduced = window.useReducedMotion();
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    "data-screen-label": "Manifesto",
    style: {
      background: 'var(--sand-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 2
  }, "Manifesto"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '18ch',
      margin: 'var(--sp-7) 0 0',
      font: 'var(--type-display-m)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      letterSpacing: 'var(--tr-display)',
      lineHeight: 1.08,
      color: 'var(--text-strong)'
    }
  }, MANIFESTO.map((w, i) => {
    const start = 0.18 + i / MANIFESTO.length * 0.5;
    const on = reduced || p > start;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-block',
        marginRight: '0.28em',
        opacity: on ? 1 : 0.14,
        transform: on ? 'translateY(0)' : 'translateY(0.18em)',
        transition: 'opacity var(--dur-slow) var(--ease-drift), transform var(--dur-slow) var(--ease-drift)'
      }
    }, w);
  })));
}
Object.assign(window, {
  Manifesto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductFlip.jsx
try { (() => {
// Scroll-driven flip between the two real E-BEACH product shots.
// Front photo turns away on the Y axis while the 3/4 shot turns in — the crossfade
// happens at the angle where both silhouettes overlap, so it reads as one object.
const SIDE_ANGLE = 52; // inherent yaw of the 3/4 photograph

function ProductFlip({
  t = 0,
  width = 640,
  base = '../..',
  shadow = true
}) {
  const yaw = t * SIDE_ANGLE;
  const mix = window.clamp01((t - 0.28) / 0.30);
  const eased = mix * mix * (3 - 2 * mix); // smoothstep
  const layer = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    willChange: 'transform, opacity'
  };
  const img = {
    width: '100%',
    height: 'auto',
    display: 'block',
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": "\xD3culos E-BEACH",
    style: {
      width,
      aspectRatio: '1048 / 459',
      position: 'relative',
      perspective: 1800
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer,
      transform: `rotateY(${-yaw}deg)`,
      opacity: 1 - eased
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/product/ebeach-front.png',
    alt: "\xD3culos E-BEACH, vista frontal",
    style: img,
    draggable: "false"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...layer,
      transform: `rotateY(${SIDE_ANGLE - yaw}deg)`,
      opacity: eased
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/product/ebeach-side.png',
    alt: "\xD3culos E-BEACH, vista tr\xEAs-quartos",
    style: img,
    draggable: "false"
  })), shadow && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '14%',
      right: '14%',
      bottom: '-4%',
      height: '9%',
      borderRadius: '50%',
      background: 'radial-gradient(ellipse at center, rgba(6,34,45,0.28), rgba(6,34,45,0) 70%)',
      filter: 'blur(6px)',
      transform: `scaleX(${1 - 0.18 * t})`,
      opacity: 0.7
    }
  }));
}
Object.assign(window, {
  ProductFlip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductFlip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
const {
  Marquee,
  SectionLabel
} = window.EBEACHDesignSystem_3fff58;
const QUOTES = [['"Aguenta um dia inteiro de sol sem escorregar."', 'Camila R. — Ubatuba'], ['"A lente verde-mar mudou o jeito que eu vejo a água."', 'Téo M. — Itacaré'], ['"Levei pro mar aberto por seis meses. Zero risco."', 'Ana P. — Búzios'], ['"Leve a ponto de esquecer que está usando."', 'Rafa L. — Florianópolis']];
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Prova social",
    style: {
      background: 'var(--sand-100)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter) var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: 7
  }, "Quem usa")), /*#__PURE__*/React.createElement(Marquee, {
    speed: 52,
    items: QUOTES.map(([q, a], i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'clamp(1.1rem,2.2vw,1.7rem)',
        letterSpacing: 'var(--tr-title)',
        color: 'var(--text-strong)'
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-label)',
        fontFamily: 'var(--font-body)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, a)))
  }));
}
Object.assign(window, {
  Proof
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScrollVideo.jsx
try { (() => {
// Scroll-scrubbed <video>. The clip is fetched as a Blob first: the project server
// answers without Range support, so a plain src= stalls — an object URL is fully
// buffered and seekable, which is exactly what scrubbing needs.
function useBlobVideo(src) {
  const [url, setUrl] = React.useState(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let dead = false,
      made = null;
    fetch(encodeURI(src)).then(r => r.ok ? r.blob() : Promise.reject(r.status)).then(b => {
      if (dead) return;
      made = URL.createObjectURL(b);
      setUrl(made);
    }).catch(() => !dead && setFailed(true));
    return () => {
      dead = true;
      if (made) URL.revokeObjectURL(made);
    };
  }, [src]);
  return {
    url,
    failed,
    setFailed
  };
}

// t: 0..1 scroll progress mapped onto the clip's timeline.
// aspect = the CROP WINDOW, not the clip's own ratio. The source is drawn with
// object-fit:cover and scaled by `zoom`, so any letterbox baked into the file is
// pushed outside the window and clipped — never painted (black bars + multiply
// blend would otherwise stamp solid black rectangles onto the page).
function ScrollVideo({
  t = 0,
  src,
  width = 640,
  aspect = '1 / 1',
  zoom = 1.32,
  offsetY = 0,
  blend = 'multiply',
  fallback = null
}) {
  const {
    url,
    failed,
    setFailed
  } = useBlobVideo(src);
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  // Some browsers stall silently instead of firing `error` (no H.264 decoder).
  // Give up after 8s so the photo fallback owns the frame outright.
  React.useEffect(() => {
    if (!url || ready) return;
    const id = setTimeout(() => {
      if (!ref.current || ref.current.readyState === 0) setFailed(true);
    }, 8000);
    return () => clearTimeout(id);
  }, [url, ready]);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || !ready) return;
    const d = v.duration;
    if (!d || !isFinite(d)) return;
    const target = Math.min(d - 0.02, Math.max(0, t * d));
    if (Math.abs(v.currentTime - target) > 0.008) v.currentTime = target;
  }, [t, ready]);
  if (failed) return fallback;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: aspect,
      position: 'relative',
      overflow: 'hidden'
    }
  }, !ready && fallback && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, fallback), url && /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: url,
    muted: true,
    playsInline: true,
    preload: "auto",
    onLoadedData: () => setReady(true),
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: `scale(${zoom}) translateY(${offsetY}%)`,
      transformOrigin: 'center',
      mixBlendMode: blend,
      opacity: ready ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-tide)'
    }
  }));
}

// Ambient looping background clip (beach plate).
function LoopVideo({
  src,
  style,
  poster
}) {
  const {
    url,
    failed
  } = useBlobVideo(src);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (v && url) v.play().catch(() => {});
  }, [url]);
  if (failed || !url) return null;
  return /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: url,
    poster: poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: style
  });
}
Object.assign(window, {
  ScrollVideo,
  LoopVideo,
  useBlobVideo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScrollVideo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  WaveDivider,
  Logo,
  Input,
  Button,
  Checkbox,
  Icon
} = window.EBEACHDesignSystem_3fff58;
function SiteFooter() {
  const [email, setEmail] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const cols = [['Coleções', ['Maré', 'Duna', 'Sol poente', 'Recife']], ['Ajuda', ['Trocas e devoluções', 'Garantia de 2 anos', 'Cuidados com a lente', 'Contato']], ['Marca', ['Nossa oficina', 'Sustentabilidade', 'Lojistas']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "on-dark",
    "data-screen-label": "Footer",
    style: {
      background: 'var(--sea-900)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sand-100)'
    }
  }, /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "var(--sea-900)",
    height: 110
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '58vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      marginBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(LoopVideo, {
    src: "../../assets/video/praia.mp4",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(6,34,45,0.55) 0%, rgba(6,34,45,0.20) 45%, var(--sea-900) 100%)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'relative',
      padding: '0 var(--gutter) var(--sp-8)',
      font: 'var(--type-display-l)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: 'var(--tr-display-xl)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)',
      margin: 0,
      maxWidth: '14ch'
    }
  }, "Encare a luz")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(280px,1fr) repeat(3, auto)',
      gap: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)',
      borderBottom: '1px solid var(--border-hairline-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    id: "nl",
    onDark: true,
    label: "Receba as cole\xE7\xF5es primeiro",
    placeholder: "voce@email.com",
    value: email,
    onChange: setEmail
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm",
    onClick: () => setOk(true),
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, ok ? 'Inscrito' : 'Assinar')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "nlc",
    onDark: true,
    label: "Aceito receber e-mails da E-BEACH.",
    checked: true
  }))), cols.map(([t, items]) => /*#__PURE__*/React.createElement("nav", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      marginBottom: 'var(--sp-4)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--sp-3)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--fs-body-s)'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "foam",
    height: 64,
    base: "../.."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 E-BEACH Eyewear \xB7 S\xE3o Sebasti\xE3o, SP"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton,
  Input,
  Checkbox
} = window.EBEACHDesignSystem_3fff58;
function SiteHeader({
  dark,
  bagCount,
  onBag
}) {
  const links = ['Coleções', 'Anatomia', 'Configurador', 'Histórias'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      transition: 'color var(--dur-slow) var(--ease-tide)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '0 0 -40px 0',
      pointerEvents: 'none',
      background: dark ? 'linear-gradient(180deg, rgba(6,34,45,0.55) 0%, rgba(6,34,45,0) 100%)' : 'linear-gradient(180deg, rgba(245,233,215,0.72) 0%, rgba(245,233,215,0) 100%)',
      transition: 'background var(--dur-slow) var(--ease-tide)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: dark ? 'foam' : 'ink',
    height: 22,
    base: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 'var(--sp-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'inherit',
      borderBottom: '1px solid transparent'
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: onBag,
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase'
    }
  }, "Sacola ", /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--sun-500)',
      color: 'var(--sea-900)',
      fontSize: 11
    }
  }, bagCount)));
}
function BagDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const total = items.reduce((s, i) => s + i.price, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'rgba(6,34,45,0.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-tide)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    className: "on-dark",
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(420px, 92vw)',
      zIndex: 100,
      background: 'var(--sea-900)',
      color: 'var(--text-on-dark)',
      padding: 'var(--sp-7)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-tide)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Sua sacola"), /*#__PURE__*/React.createElement(IconButton, {
    name: "x",
    label: "Fechar sacola",
    tone: "foam",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Ainda vazia. Monte o seu no configurador."), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-4) 0',
      borderBottom: '1px solid var(--border-hairline-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 48,
      borderRadius: 6,
      background: it.lens,
      flex: '0 0 auto',
      border: '2px solid ' + it.frame
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-dark-muted)'
    }
  }, it.frameLabel, " \xB7 ", it.lensLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)'
    }
  }, window.BRL(it.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      marginTop: 6,
      cursor: 'pointer',
      color: 'var(--text-on-dark-muted)',
      fontSize: 11,
      textDecoration: 'underline'
    }
  }, "remover"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24
    }
  }, window.BRL(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    fullWidth: true
  }, "Finalizar compra"))));
}
Object.assign(window, {
  SiteHeader,
  BagDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const {
  GrainOverlay
} = window.EBEACHDesignSystem_3fff58;
function App() {
  const [bag, setBag] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const els = document.querySelectorAll('[data-dark-section]');
      let d = false;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top <= 40 && r.bottom >= 40) d = true;
      });
      setDark(d);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const add = item => {
    setBag(b => [...b, item]);
    setOpen(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    dark: dark,
    bagCount: bag.length,
    onBag: () => setOpen(true)
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(Anatomy, null), /*#__PURE__*/React.createElement("div", {
    "data-dark-section": true
  }, /*#__PURE__*/React.createElement(Collections, null)), /*#__PURE__*/React.createElement(Configurator, {
    onAdd: add
  }), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement("div", {
    "data-dark-section": true
  }, /*#__PURE__*/React.createElement(SiteFooter, null)), /*#__PURE__*/React.createElement(BagDrawer, {
    open: open,
    items: bag,
    onClose: () => setOpen(false),
    onRemove: i => setBag(b => b.filter((_, j) => j !== i))
  }), /*#__PURE__*/React.createElement(GrainOverlay, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hooks.jsx
try { (() => {
// Shared scroll utilities. Everything is progress-driven, nothing fires once.
function useScrollProgress(ref, {
  start = 'top bottom'
} = {}) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight;
        const v = 1 - r.bottom / total;
        setP(Math.min(1, Math.max(0, v)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref]);
  return p;
}

// Progress through a pinned/sticky section: 0 when its top hits the viewport top, 1 at its end.
function usePinProgress(ref) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const span = Math.max(1, r.height - window.innerHeight);
        setP(Math.min(1, Math.max(0, -r.top / span)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref]);
  return p;
}
function useReducedMotion() {
  const [r, setR] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const h = () => setR(m.matches);
    h();
    m.addEventListener('change', h);
    return () => m.removeEventListener('change', h);
  }, []);
  return r;
}
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = v => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const BRL = n => 'R$ ' + n.toLocaleString('pt-BR');
Object.assign(window, {
  useScrollProgress,
  usePinProgress,
  useReducedMotion,
  lerp,
  clamp01,
  range,
  BRL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hooks.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GrainOverlay = __ds_scope.GrainOverlay;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

__ds_ns.CollectionCard = __ds_scope.CollectionCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecRow = __ds_scope.SpecRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SwatchPicker = __ds_scope.SwatchPicker;

__ds_ns.Switch = __ds_scope.Switch;

})();
