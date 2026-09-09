/* @ds-bundle: {"format":4,"namespace":"CaroleSessegnonDesignSystem_d86b2c","components":[{"name":"CardProduit","sourcePath":"components/CardProduit.jsx"},{"name":"Categoris","sourcePath":"components/Categoris.jsx"},{"name":"ContinueWithAppleLeftAligned","sourcePath":"components/ContinueWithAppleLeftAligned.jsx"},{"name":"ContinueWithGoogleLeftAligned","sourcePath":"components/ContinueWithGoogleLeftAligned.jsx"},{"name":"Footer","sourcePath":"components/Footer.jsx"},{"name":"Logo","sourcePath":"components/Logo.jsx"},{"name":"Menu","sourcePath":"components/Menu.jsx"},{"name":"Navbar","sourcePath":"components/Navbar.jsx"},{"name":"RecapCommande","sourcePath":"components/RecapCommande.jsx"},{"name":"AccordionItem","sourcePath":"components/forms/AccordionItem.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/CardProduit.jsx":"c02b7de146ec","components/Categoris.jsx":"6ca4a21e3b2b","components/ContinueWithAppleLeftAligned.jsx":"d73c458a57fc","components/ContinueWithGoogleLeftAligned.jsx":"05efe2b1bc3e","components/Footer.jsx":"54c184b4d97d","components/Logo.jsx":"cb8751eb0f1c","components/Menu.jsx":"2a1c4e0f33bf","components/Navbar.jsx":"ac11c8aed19a","components/RecapCommande.jsx":"5ed351c42569","components/forms/AccordionItem.jsx":"b4fe73c5d2ab","components/forms/Button.jsx":"e9ec7b38bef3","components/forms/Checkbox.jsx":"e277f3651495","components/forms/Input.jsx":"a23fe245829a","ui_kits/boutique/App.jsx":"81e66642d3cf","ui_kits/boutique/Screens/Accueil.jsx":"4ecc5038a08f","ui_kits/boutique/Screens/Connexion.jsx":"a80deca05b70","ui_kits/boutique/Screens/Contact.jsx":"8d2f313de5e1","ui_kits/boutique/Screens/FicheProduit.jsx":"d63154c39d92","ui_kits/boutique/Screens/LaMaison.jsx":"dc2823643715","ui_kits/boutique/Screens/LesPieces.jsx":"a1faa5094ffc","ui_kits/boutique/Screens/PanierCheckout.jsx":"70567397c8af","ui_kits/boutique/Screens/Passeport.jsx":"63982571b651","ui_kits/boutique/Screens/shared.jsx":"bb78b4300d6b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CaroleSessegnonDesignSystem_d86b2c = window.CaroleSessegnonDesignSystem_d86b2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/CardProduit.jsx
try { (() => {
// figma node: 16:4681 card produit (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function CardProduit(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default card"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 472,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 600.63,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 472,
      height: 600.63
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168.643,
      top: 580,
      width: 135.712,
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-950)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 282.5,
      width: 34.926,
      height: 35,
      opacity: 0,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-200)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,472,282.500)",
      transformOrigin: "0 0",
      width: 34.926,
      height: 35,
      opacity: 0,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-200)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 431,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Title"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "10 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "BIENTOT DISPONIBLE")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 472,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 600.63,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 472,
      height: 600.63
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168.643,
      top: 580,
      width: 135.712,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 65.356 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexGrow: 1,
      color: "var(--color-secondary-950)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1 L 65.356 1 L 65.356 0 L 65.356 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 65.356 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1 L 65.356 1 L 65.356 0 L 65.356 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.467,
      top: 282.5,
      width: 34.926,
      height: 35,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-600)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,456.533,282.500)",
      transformOrigin: "0 0",
      width: 34.926,
      height: 35,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-600)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 431,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Title"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "10 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "BIENTOT DISPONIBLE")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 472,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 600.63,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ece298d0ec2c16f1",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 472,
      height: 600.63
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168.643,
      top: 580,
      width: 135.712,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 65.356 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1 L 65.356 1 L 65.356 0 L 65.356 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 2,
    viewBox: "0 -1 65.356 2",
    fill: "none",
    style: {
      position: "relative",
      height: 2,
      flexGrow: 1,
      color: "var(--color-secondary-950)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1 L 65.356 1 L 65.356 0 L 65.356 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.467,
      top: 282.5,
      width: 34.926,
      height: 35,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-600)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,456.533,282.500)",
      transformOrigin: "0 0",
      width: 34.926,
      height: 35,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-600)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 431,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Title"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "10 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "BIENTOT DISPONIBLE")));
  const __impls = {
    // figma: Property 1=default card
    "property1=default card": __body0,
    // figma: Property 1=hover
    "property1=hover": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body2
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CardProduit, __ds_default_components_CardProduit_17p7vi3: CardProduit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/CardProduit.jsx", error: String((e && e.message) || e) }); }

// components/Categoris.jsx
try { (() => {
// figma node: 16:5147 categoris
function Categoris(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 472,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 600.63,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 472,
      height: 600.63,
      backgroundColor: "rgb(238,238,238)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168.643,
      top: 580,
      width: 135.712,
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-950)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 30.178 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexGrow: 1,
      color: "var(--color-secondary-50)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.5 L 30.178 0.5 L 30.178 0 L 30.178 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 282.5,
      width: 34.926,
      height: 35,
      opacity: 0,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-200)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,472,282.500)",
      transformOrigin: "0 0",
      width: 34.926,
      height: 35,
      opacity: 0,
      borderRadius: 30,
      backgroundColor: "var(--color-secondary-200)",
      display: "flex",
      flexDirection: "row",
      gap: 5.46875,
      padding: "10.938px 10.938px 10.938px 10.938px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 10,
    viewBox: "0 0 5 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 5,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.371 0.503 C 5.649 0.299 5.708 -0.093 5.503 -0.371 C 5.299 -0.649 4.907 -0.708 4.629 -0.503 L 5 0 L 5.371 0.503 Z M 0 5 L -0.625 5 L 0 5 Z M 4.629 10.503 C 4.907 10.708 5.299 10.649 5.503 10.371 C 5.708 10.093 5.649 9.701 5.371 9.497 L 5 10 L 4.629 10.503 Z M 5 0 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.629 -0.503 4.629 -0.503 C 4.629 -0.503 4.628 -0.503 4.628 -0.502 C 4.627 -0.502 4.626 -0.501 4.625 -0.5 C 4.622 -0.498 4.619 -0.495 4.614 -0.492 C 4.604 -0.484 4.589 -0.473 4.57 -0.459 C 4.533 -0.431 4.478 -0.39 4.408 -0.338 C 4.27 -0.233 4.072 -0.082 3.834 0.103 C 3.36 0.473 2.726 0.982 2.09 1.534 C 1.457 2.083 0.809 2.688 0.313 3.249 C 0.066 3.529 -0.157 3.812 -0.32 4.084 C -0.474 4.339 -0.625 4.661 -0.625 5 L 0 5 L 0.625 5 C 0.625 5.009 0.63 4.928 0.75 4.73 C 0.86 4.548 1.028 4.327 1.25 4.077 C 1.691 3.577 2.293 3.014 2.91 2.478 C 3.524 1.945 4.14 1.45 4.603 1.089 C 4.835 0.908 5.027 0.761 5.162 0.66 C 5.229 0.609 5.282 0.569 5.317 0.543 C 5.335 0.53 5.349 0.519 5.358 0.513 C 5.362 0.51 5.366 0.507 5.368 0.505 C 5.369 0.505 5.37 0.504 5.37 0.504 C 5.37 0.503 5.37 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5.371 0.503 C 5.371 0.503 5.371 0.503 5 0 Z M 0 5 L -0.625 5 C -0.625 5.339 -0.474 5.661 -0.32 5.916 C -0.157 6.188 0.066 6.471 0.313 6.751 C 0.809 7.312 1.457 7.917 2.09 8.466 C 2.726 9.018 3.36 9.527 3.834 9.897 C 4.072 10.082 4.27 10.233 4.408 10.338 C 4.478 10.39 4.533 10.431 4.57 10.459 C 4.589 10.473 4.604 10.484 4.614 10.492 C 4.619 10.495 4.622 10.498 4.625 10.5 C 4.626 10.501 4.627 10.502 4.628 10.502 C 4.628 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 4.629 10.503 C 4.629 10.503 4.629 10.503 5 10 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.371 9.497 5.371 9.497 5.371 9.497 C 5.37 9.497 5.37 9.497 5.37 9.496 C 5.37 9.496 5.369 9.495 5.368 9.495 C 5.366 9.493 5.362 9.49 5.358 9.487 C 5.349 9.481 5.335 9.47 5.317 9.457 C 5.282 9.431 5.229 9.391 5.162 9.34 C 5.027 9.239 4.835 9.092 4.603 8.911 C 4.14 8.55 3.524 8.055 2.91 7.522 C 2.293 6.986 1.691 6.423 1.25 5.923 C 1.028 5.673 0.86 5.452 0.75 5.27 C 0.63 5.072 0.625 4.991 0.625 5 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 431,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      textAlign: "center",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Title")));
}
Object.assign(__ds_scope, { Categoris, __ds_default_components_Categoris_zkiu2j: Categoris });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Categoris.jsx", error: String((e && e.message) || e) }); }

// components/ContinueWithAppleLeftAligned.jsx
try { (() => {
// figma node: 204:1717 Continue with Apple / Left Aligned / Fixed
function ContinueWithAppleLeftAligned(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 283,
      boxShadow: "inset 0 0 0 1px var(--color-secondary-950)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      padding: "15px 15px 15px 15px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-secondary-950)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.373,
    height: 23,
    viewBox: "0 0 19.373 23",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.313,
      top: 0.5,
      width: 19.373,
      height: 23
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.967 17.924 C 18.619 18.728 18.208 19.467 17.731 20.147 C 17.081 21.074 16.548 21.716 16.138 22.072 C 15.502 22.657 14.82 22.957 14.091 22.974 C 13.567 22.974 12.935 22.825 12.2 22.522 C 11.462 22.221 10.784 22.072 10.164 22.072 C 9.513 22.072 8.816 22.221 8.07 22.522 C 7.323 22.825 6.721 22.982 6.261 22.998 C 5.561 23.028 4.864 22.72 4.168 22.072 C 3.723 21.685 3.168 21.02 2.502 20.079 C 1.787 19.074 1.2 17.908 0.74 16.58 C 0.247 15.144 0 13.754 0 12.409 C 0 10.867 0.333 9.538 1 8.424 C 1.524 7.529 2.222 6.823 3.095 6.305 C 3.968 5.787 4.911 5.523 5.927 5.506 C 6.483 5.506 7.212 5.678 8.117 6.016 C 9.021 6.355 9.601 6.527 9.855 6.527 C 10.045 6.527 10.689 6.326 11.781 5.925 C 12.814 5.553 13.686 5.399 14.4 5.46 C 16.335 5.616 17.789 6.379 18.756 7.753 C 17.025 8.802 16.169 10.27 16.186 12.154 C 16.202 13.622 16.734 14.843 17.78 15.813 C 18.255 16.263 18.784 16.611 19.373 16.858 C 19.246 17.228 19.111 17.583 18.967 17.924 L 18.967 17.924 Z M 14.529 0.46 C 14.529 1.61 14.109 2.684 13.271 3.678 C 12.261 4.86 11.038 5.543 9.712 5.435 C 9.695 5.297 9.685 5.152 9.685 5 C 9.685 3.895 10.166 2.713 11.02 1.747 C 11.446 1.258 11.988 0.851 12.645 0.527 C 13.301 0.207 13.922 0.03 14.505 0 C 14.522 0.154 14.529 0.308 14.529 0.46 L 14.529 0.46 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Continuer avec Apple"));
}
Object.assign(__ds_scope, { ContinueWithAppleLeftAligned, __ds_default_components_ContinueWithAppleLeftAligned_1iyjibw: ContinueWithAppleLeftAligned });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ContinueWithAppleLeftAligned.jsx", error: String((e && e.message) || e) }); }

// components/ContinueWithGoogleLeftAligned.jsx
try { (() => {
// figma node: 204:1708 Continue with Google / Left Aligned / Fixed
function ContinueWithGoogleLeftAligned(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 283,
      boxShadow: "inset 0 0 0 1px var(--color-secondary-950)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      padding: "15px 15px 15px 15px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.5,
      top: 0.5,
      width: 23,
      height: 23,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.040,
    height: 10.805,
    viewBox: "0 0 11.040 10.805",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.5,
      top: 9.409,
      width: 11.04,
      height: 10.805,
      color: "rgb(66,133,244)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.04 2.352 C 11.04 1.537 10.967 0.753 10.831 0 L 0 0 L 0 4.448 L 6.189 4.448 C 5.922 5.886 5.112 7.104 3.894 7.919 L 3.894 10.805 L 7.611 10.805 C 9.785 8.803 11.04 5.855 11.04 2.352 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.888,
    height: 9.315,
    viewBox: "0 0 17.888 9.315",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.223,
      top: 13.685,
      width: 17.888,
      height: 9.315,
      color: "rgb(52,168,83)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.277 9.315 C 13.382 9.315 15.985 8.285 17.888 6.529 L 14.171 3.643 C 13.141 4.333 11.824 4.741 10.277 4.741 C 7.282 4.741 4.746 2.718 3.842 0 L 0 0 L 0 2.98 C 1.892 6.738 5.781 9.315 10.277 9.315 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.065,
    height: 10.329,
    viewBox: "0 0 5.065 10.329",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6.336,
      width: 5.065,
      height: 10.329,
      color: "rgb(251,188,5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.065 7.35 C 4.835 6.66 4.705 5.923 4.705 5.165 C 4.705 4.407 4.835 3.67 5.065 2.98 L 5.065 0 L 1.223 0 C 0.444 1.553 0 3.309 0 5.165 C 0 7.02 0.444 8.777 1.223 10.329 L 5.065 7.35 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.971,
    height: 9.315,
    viewBox: "0 0 17.971 9.315",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.223,
      top: 0,
      width: 17.971,
      height: 9.315,
      color: "rgb(234,67,53)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.277 4.574 C 11.965 4.574 13.481 5.154 14.673 6.294 L 17.971 2.995 C 15.98 1.14 13.377 0 10.277 0 C 5.781 0 1.892 2.577 0 6.335 L 3.842 9.315 C 4.746 6.597 7.282 4.574 10.277 4.574 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23,
    height: 23,
    viewBox: "0 0 23 23",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23,
      height: 23
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 23 0 L 23 23 L 0 23 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-secondary-950)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Continuer avec Google"));
}
Object.assign(__ds_scope, { ContinueWithGoogleLeftAligned, __ds_default_components_ContinueWithGoogleLeftAligned_1njkegn: ContinueWithGoogleLeftAligned });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ContinueWithGoogleLeftAligned.jsx", error: String((e && e.message) || e) }); }

// components/Logo.jsx
try { (() => {
// figma node: 9:473 logo (6 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Logo(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "cs-logo-combi 1"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 776.41,
      height: 341.16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(16,16,15)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.005,
      width: 776.41,
      height: 341.16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 776.41,
      height: 341.16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 199.550,
    height: 341.160,
    viewBox: "0 0 199.550 341.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 199.55,
      height: 341.16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 95.17 0.095 C 150.18 -2.185 195.64 36.885 199.55 91.575 L 199.55 249.635 C 195.07 311.165 138.16 351.445 77.55 338.855 C 34.69 329.955 2.55 292.815 0 249.355 L 0 91.585 C 3.51 40.735 43.97 2.215 95.17 0.095 Z M 97.28 175.165 C 105.32 179.105 114.12 182.205 122.33 186.025 C 138.13 193.395 154.02 201.905 166.75 213.905 C 176.92 205.525 185.36 194.475 190.74 182.465 C 189.84 153.405 191.91 123.665 190.74 94.675 C 189.09 53.445 159.35 18.075 118.3 10.535 C 62.23 0.255 11.48 37.835 8.81 94.685 C 9.07 102.575 8.51 110.525 8.82 118.405 C 8.83 118.745 8.61 119.455 9.1 119.385 C 15.05 95.795 30.75 74.545 51.48 61.695 C 76.5 46.195 109.03 42.435 136.43 54.065 C 141.63 56.275 146.5 59.165 151.22 62.245 C 151.04 62.545 150.31 62.395 150.01 62.315 C 147.18 61.635 143.75 59.705 140.85 58.705 C 72.61 35.255 5.32 96.935 21.31 165.605 C 32.64 214.295 81.71 247.085 131.54 232.915 C 133.47 232.365 139.89 230.685 140.85 229.765 C 141.04 229.585 146.18 236.145 147.23 237.785 C 147.77 238.635 142.25 240.875 141.18 241.355 C 91.65 263.145 31.05 235.705 12.59 186.065 L 8.83 174.985 L 8.83 246.255 C 9.77 273.255 23.07 298.595 44.83 314.625 C 84.75 344.025 145.04 335.905 173.91 295.295 C 179.82 286.975 181.85 274.075 180.75 264.055 C 176.21 222.755 119.11 210.005 88.41 193.475 C 65.01 180.875 47.1 163.815 53.02 134.905 C 59.26 104.385 93.5 91.045 121.96 96.955 C 130.37 98.705 147.45 105.445 155.22 103.175 C 158.54 102.205 157.59 98.275 157.48 95.685 C 158.51 95.935 159.91 94.925 160.63 95.805 L 170.22 136.195 L 167.15 137.175 C 166.31 133.385 165.04 130.125 162.83 126.925 C 153.93 114.035 129.03 101.345 113.57 99.645 C 93.83 97.465 69.98 107.125 64.85 127.745 C 58.9 151.645 78.46 165.945 97.3 175.175 L 97.28 175.165 Z M 189.3 259.645 L 190.74 246.535 L 190.59 191.065 C 186.38 201.595 180.41 211.505 172.56 219.755 C 180.24 228.975 185.75 239.895 188.09 251.685 L 189.31 259.645 L 189.3 259.645 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 222.67,
      top: 96.125,
      width: 553.74,
      height: 148.92,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.03,
      top: 0,
      width: 376.28,
      height: 70.34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 67.450,
    height: 70.330,
    viewBox: "0 0 67.450 70.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 67.45,
      height: 70.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.23 35.4 C 13.23 40.1 13.94 44.32 15.36 48.05 C 16.78 51.79 18.73 54.95 21.22 57.53 C 23.71 60.11 26.64 62.09 30.02 63.46 C 33.4 64.83 37.07 65.51 41.02 65.51 C 43.39 65.51 45.67 65.05 47.87 64.14 C 50.07 63.23 52.1 62.04 53.98 60.56 C 55.86 59.09 57.54 57.43 59.03 55.59 C 60.52 53.75 61.73 51.88 62.68 49.99 L 67.45 53.03 C 66.06 55.3 64.42 57.47 62.53 59.55 C 60.64 61.63 58.45 63.47 55.96 65.08 C 53.48 66.69 50.67 67.96 47.54 68.91 C 44.41 69.86 40.92 70.33 37.07 70.33 C 31.49 70.33 26.43 69.4 21.88 67.54 C 17.33 65.68 13.44 63.16 10.19 59.98 C 6.94 56.8 4.43 53.09 2.66 48.85 C 0.89 44.61 0 40.12 0 35.39 C 0 32.25 0.41 29.18 1.22 26.19 C 2.03 23.2 3.21 20.39 4.74 17.77 C 6.28 15.15 8.15 12.75 10.37 10.57 C 12.58 8.39 15.09 6.51 17.88 4.94 C 20.67 3.37 23.72 2.15 27.03 1.29 C 30.34 0.43 33.88 0 37.63 0 C 41.38 0 44.52 0.48 47.54 1.45 C 50.57 2.41 53.32 3.69 55.81 5.28 C 58.29 6.87 60.51 8.7 62.45 10.78 C 64.39 12.86 66.06 15.03 67.44 17.3 L 62.52 20.55 C 59.71 15.11 56.57 11.13 53.09 8.61 C 49.61 6.09 45.6 4.83 41.07 4.83 C 37.18 4.83 33.55 5.54 30.17 6.96 C 26.79 8.38 23.84 10.41 21.32 13.05 C 18.8 15.69 16.82 18.89 15.39 22.66 C 13.95 26.43 13.23 30.68 13.23 35.41 L 13.23 35.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66.880,
    height: 68.760,
    viewBox: "0 0 66.880 68.760",
    fill: "none",
    style: {
      position: "absolute",
      left: 67.44,
      top: 0,
      width: 66.88,
      height: 68.76
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.24 0 L 66.88 68.76 L 55.37 68.76 L 45.13 46.35 L 16.28 46.35 L 5.68 68.76 L 0 68.76 L 32.4 0 L 35.24 0 Z M 18.26 41.99 L 43.06 41.99 L 30.84 15.37 L 18.26 41.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 55.740,
    height: 67.240,
    viewBox: "0 0 55.740 67.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 140.2,
      top: 1.52,
      width: 55.74,
      height: 67.24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.01 L 23.33 0.01 C 27.35 0.01 30.89 0.44 33.93 1.3 C 36.97 2.16 39.51 3.37 41.54 4.93 C 43.57 6.49 45.1 8.34 46.13 10.48 C 47.16 12.63 47.68 14.97 47.68 17.5 C 47.68 19.6 47.28 21.56 46.49 23.38 C 45.7 25.21 44.58 26.85 43.14 28.32 C 41.7 29.79 39.97 31.06 37.94 32.12 C 35.91 33.18 33.68 34.02 31.25 34.63 L 55.74 67.24 L 42.61 67.24 L 19.23 35.65 L 11.32 35.65 L 11.32 67.24 L 0.01 67.24 L 0.01 0 L 0 0.01 Z M 11.3 32.26 L 17.84 32.26 C 20.38 32.26 22.72 31.92 24.86 31.25 C 27.01 30.57 28.87 29.62 30.44 28.38 C 32.01 27.15 33.24 25.65 34.12 23.89 C 35 22.13 35.44 20.15 35.44 17.96 C 35.44 15.93 35.09 14.07 34.4 12.38 C 33.71 10.69 32.73 9.24 31.46 8.04 C 30.19 6.84 28.69 5.9 26.95 5.23 C 25.21 4.55 23.31 4.22 21.25 4.22 L 11.31 4.22 L 11.31 32.26 L 11.3 32.26 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 74.190,
    height: 70.340,
    viewBox: "0 0 74.190 70.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 193.61,
      top: 0,
      width: 74.19,
      height: 70.34
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.07 70.34 C 31.86 70.34 27 69.41 22.49 67.55 C 17.98 65.69 14.05 63.15 10.73 59.92 C 7.4 56.69 4.78 52.92 2.87 48.61 C 0.96 44.3 0 39.69 0 34.79 C 0 31.58 0.43 28.49 1.29 25.51 C 2.15 22.54 3.38 19.76 4.97 17.19 C 6.56 14.62 8.48 12.28 10.73 10.17 C 12.98 8.06 15.47 6.25 18.21 4.74 C 20.95 3.24 23.91 2.07 27.08 1.24 C 30.26 0.41 33.59 0 37.07 0 C 40.55 0 43.88 0.41 47.06 1.24 C 50.24 2.07 53.2 3.24 55.96 4.74 C 58.72 6.24 61.21 8.05 63.44 10.17 C 65.67 12.28 67.59 14.62 69.2 17.19 C 70.81 19.76 72.04 22.53 72.9 25.51 C 73.76 28.49 74.19 31.58 74.19 34.79 C 74.19 38 73.76 41.17 72.9 44.2 C 72.04 47.23 70.8 50.06 69.2 52.69 C 67.59 55.33 65.68 57.73 63.44 59.89 C 61.21 62.05 58.72 63.91 55.96 65.47 C 53.2 67.03 50.24 68.23 47.06 69.07 C 43.88 69.91 40.55 70.34 37.07 70.34 Z M 37.07 66.99 C 40.92 66.99 44.33 66.19 47.29 64.58 C 50.25 62.97 52.74 60.74 54.77 57.86 C 56.8 54.99 58.33 51.59 59.36 47.67 C 60.39 43.75 60.91 39.45 60.91 34.79 C 60.91 30.13 60.39 25.92 59.36 22.06 C 58.33 18.21 56.8 14.88 54.77 12.1 C 52.74 9.31 50.25 7.15 47.29 5.61 C 44.33 4.07 40.93 3.3 37.07 3.3 C 33.21 3.3 29.71 4.07 26.75 5.61 C 23.79 7.15 21.31 9.31 19.3 12.1 C 17.29 14.89 15.78 18.21 14.76 22.06 C 13.75 25.91 13.24 30.16 13.24 34.79 C 13.24 39.42 13.75 43.75 14.76 47.67 C 15.77 51.59 17.29 54.99 19.3 57.86 C 21.31 60.73 23.8 62.97 26.75 64.58 C 29.71 66.19 33.15 66.99 37.07 66.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45.180,
    height: 67.240,
    viewBox: "0 0 45.180 67.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 277.3,
      top: 1.53,
      width: 45.18,
      height: 67.24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 11.31 0 L 11.31 62.88 L 45.18 62.88 L 45.18 67.24 L 0 67.24 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.760,
    height: 67.240,
    viewBox: "0 0 46.760 67.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 329.52,
      top: 1.53,
      width: 46.76,
      height: 67.24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.76 0 L 46.76 4.36 L 11.31 4.36 L 11.31 28.4 L 35.04 28.4 L 35.04 32.76 L 11.31 32.76 L 11.31 62.88 L 46.76 62.88 L 46.76 67.24 L 0 67.24 L 0 0 L 46.76 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 78.57,
      width: 553.74,
      height: 70.35,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 339.23,
      height: 70.35,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 47.920,
    height: 70.330,
    viewBox: "0 0 47.920 70.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 47.92,
      height: 70.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.62 66.08 C 26.28 66.08 27.92 65.85 29.54 65.4 C 31.16 64.94 32.62 64.27 33.9 63.37 C 35.18 62.47 36.22 61.38 36.99 60.07 C 37.77 58.77 38.16 57.26 38.16 55.53 C 38.16 53.47 37.63 51.63 36.56 50.03 C 35.5 48.42 34.1 46.95 32.38 45.62 C 30.66 44.28 28.69 43.03 26.47 41.84 C 24.26 40.66 22 39.47 19.7 38.29 C 17.4 37.11 15.14 35.86 12.93 34.56 C 10.72 33.26 8.75 31.8 7.02 30.2 C 5.3 28.59 3.9 26.8 2.84 24.82 C 1.78 22.84 1.24 20.57 1.24 18 C 1.24 15.43 1.72 13.05 2.69 10.85 C 3.65 8.65 5.06 6.75 6.92 5.15 C 8.78 3.54 11.07 2.28 13.79 1.37 C 16.51 0.46 19.63 0 23.15 0 C 26.33 0 29.17 0.34 31.67 1.01 C 34.17 1.69 36.37 2.68 38.26 4 C 40.15 5.32 41.76 6.94 43.08 8.87 C 44.4 10.8 45.46 13.03 46.27 15.56 L 40.49 18.2 C 39.81 16.14 38.95 14.25 37.9 12.55 C 36.85 10.84 35.6 9.38 34.15 8.16 C 32.7 6.94 31.01 6 29.1 5.35 C 27.19 4.69 25.03 4.36 22.63 4.36 C 20.5 4.36 18.64 4.66 17.05 5.25 C 15.46 5.84 14.13 6.62 13.07 7.58 C 12.01 8.54 11.21 9.63 10.69 10.83 C 10.17 12.03 9.9 13.26 9.9 14.51 C 9.9 16.27 10.44 17.88 11.52 19.35 C 12.6 20.82 14.04 22.21 15.83 23.51 C 17.62 24.81 19.66 26.07 21.94 27.29 C 24.22 28.51 26.55 29.74 28.91 30.99 C 31.28 32.24 33.6 33.54 35.88 34.89 C 38.16 36.24 40.2 37.72 41.99 39.33 C 43.78 40.94 45.22 42.69 46.3 44.6 C 47.38 46.51 47.92 48.65 47.92 51.01 C 47.92 53.68 47.41 56.19 46.4 58.54 C 45.39 60.89 43.86 62.93 41.84 64.68 C 39.81 66.42 37.29 67.8 34.28 68.81 C 31.27 69.82 27.77 70.33 23.78 70.33 C 20.53 70.33 17.64 69.98 15.11 69.27 C 12.57 68.56 10.33 67.53 8.39 66.18 C 6.45 64.83 4.78 63.18 3.4 61.24 C 2.01 59.3 0.88 57.07 0 54.57 L 6.03 52.09 C 6.74 54.29 7.69 56.25 8.9 57.97 C 10.1 59.69 11.49 61.16 13.08 62.36 C 14.67 63.56 16.43 64.48 18.38 65.12 C 20.32 65.76 22.39 66.08 24.59 66.08 L 24.62 66.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.760,
    height: 67.240,
    viewBox: "0 0 46.760 67.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 57.44,
      top: 1.53,
      width: 46.76,
      height: 67.24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.76 0 L 46.76 4.36 L 11.31 4.36 L 11.31 28.4 L 35.04 28.4 L 35.04 32.76 L 11.31 32.76 L 11.31 62.88 L 46.76 62.88 L 46.76 67.24 L 0 67.24 L 0 0 L 46.76 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 47.920,
    height: 70.330,
    viewBox: "0 0 47.920 70.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 109.17,
      top: 0,
      width: 47.92,
      height: 70.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.62 66.08 C 26.28 66.08 27.92 65.85 29.54 65.4 C 31.16 64.95 32.62 64.27 33.9 63.37 C 35.18 62.47 36.22 61.38 36.99 60.07 C 37.77 58.77 38.16 57.26 38.16 55.53 C 38.16 53.47 37.63 51.63 36.56 50.03 C 35.5 48.42 34.1 46.95 32.38 45.62 C 30.66 44.28 28.69 43.03 26.47 41.84 C 24.26 40.66 22 39.47 19.7 38.29 C 17.4 37.11 15.14 35.86 12.93 34.56 C 10.72 33.26 8.75 31.8 7.02 30.2 C 5.3 28.59 3.9 26.8 2.84 24.82 C 1.78 22.84 1.24 20.57 1.24 18 C 1.24 15.43 1.72 13.05 2.69 10.85 C 3.65 8.65 5.06 6.75 6.92 5.15 C 8.78 3.54 11.07 2.28 13.79 1.37 C 16.51 0.46 19.63 0 23.15 0 C 26.33 0 29.17 0.34 31.67 1.01 C 34.17 1.69 36.37 2.68 38.26 4 C 40.15 5.32 41.76 6.94 43.08 8.87 C 44.4 10.8 45.46 13.03 46.27 15.56 L 40.49 18.2 C 39.81 16.14 38.95 14.25 37.9 12.55 C 36.85 10.84 35.6 9.38 34.15 8.16 C 32.7 6.94 31.01 6 29.1 5.35 C 27.19 4.69 25.03 4.36 22.63 4.36 C 20.5 4.36 18.64 4.66 17.05 5.25 C 15.46 5.84 14.13 6.62 13.07 7.58 C 12.01 8.54 11.21 9.63 10.69 10.83 C 10.17 12.03 9.9 13.26 9.9 14.51 C 9.9 16.27 10.44 17.88 11.52 19.35 C 12.6 20.82 14.04 22.21 15.83 23.51 C 17.62 24.81 19.66 26.07 21.94 27.29 C 24.22 28.51 26.55 29.74 28.91 30.99 C 31.28 32.24 33.6 33.54 35.88 34.89 C 38.16 36.24 40.2 37.72 41.99 39.33 C 43.78 40.94 45.22 42.69 46.3 44.6 C 47.38 46.51 47.92 48.65 47.92 51.01 C 47.92 53.68 47.41 56.19 46.4 58.54 C 45.39 60.89 43.86 62.93 41.84 64.68 C 39.81 66.42 37.29 67.8 34.28 68.81 C 31.27 69.82 27.77 70.33 23.78 70.33 C 20.53 70.33 17.64 69.98 15.11 69.27 C 12.57 68.56 10.33 67.53 8.39 66.18 C 6.45 64.83 4.78 63.18 3.4 61.24 C 2.01 59.3 0.88 57.07 0 54.57 L 6.03 52.09 C 6.74 54.29 7.69 56.25 8.9 57.97 C 10.1 59.69 11.49 61.16 13.08 62.36 C 14.67 63.56 16.43 64.48 18.38 65.12 C 20.32 65.76 22.39 66.08 24.59 66.08 L 24.62 66.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 47.920,
    height: 70.330,
    viewBox: "0 0 47.920 70.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 164.51,
      top: 0,
      width: 47.92,
      height: 70.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.62 66.08 C 26.28 66.08 27.92 65.85 29.54 65.4 C 31.16 64.95 32.62 64.27 33.9 63.37 C 35.18 62.47 36.22 61.38 36.99 60.07 C 37.77 58.77 38.16 57.26 38.16 55.53 C 38.16 53.47 37.63 51.63 36.56 50.03 C 35.5 48.42 34.1 46.95 32.38 45.62 C 30.66 44.28 28.69 43.03 26.47 41.84 C 24.26 40.66 22 39.47 19.7 38.29 C 17.4 37.11 15.14 35.86 12.93 34.56 C 10.72 33.26 8.75 31.8 7.02 30.2 C 5.3 28.59 3.9 26.8 2.84 24.82 C 1.78 22.84 1.24 20.57 1.24 18 C 1.24 15.43 1.72 13.05 2.69 10.85 C 3.65 8.65 5.06 6.75 6.92 5.15 C 8.78 3.54 11.07 2.28 13.79 1.37 C 16.51 0.46 19.63 0 23.15 0 C 26.33 0 29.17 0.34 31.67 1.01 C 34.17 1.69 36.37 2.68 38.26 4 C 40.15 5.32 41.76 6.94 43.08 8.87 C 44.4 10.8 45.46 13.03 46.27 15.56 L 40.49 18.2 C 39.81 16.14 38.95 14.25 37.9 12.55 C 36.85 10.84 35.6 9.38 34.15 8.16 C 32.7 6.94 31.01 6 29.1 5.35 C 27.19 4.69 25.03 4.36 22.63 4.36 C 20.5 4.36 18.64 4.66 17.05 5.25 C 15.46 5.84 14.13 6.62 13.07 7.58 C 12.01 8.54 11.21 9.63 10.69 10.83 C 10.17 12.03 9.9 13.26 9.9 14.51 C 9.9 16.27 10.44 17.88 11.52 19.35 C 12.6 20.82 14.04 22.21 15.83 23.51 C 17.62 24.81 19.66 26.07 21.94 27.29 C 24.22 28.51 26.55 29.74 28.91 30.99 C 31.28 32.24 33.6 33.54 35.88 34.89 C 38.16 36.24 40.2 37.72 41.99 39.33 C 43.78 40.94 45.22 42.69 46.3 44.6 C 47.38 46.51 47.92 48.65 47.92 51.01 C 47.92 53.68 47.41 56.19 46.4 58.54 C 45.39 60.89 43.86 62.93 41.84 64.68 C 39.81 66.42 37.29 67.8 34.28 68.81 C 31.27 69.82 27.77 70.33 23.78 70.33 C 20.53 70.33 17.64 69.98 15.11 69.27 C 12.58 68.56 10.33 67.53 8.39 66.18 C 6.45 64.83 4.78 63.18 3.4 61.24 C 2.01 59.3 0.88 57.07 0 54.57 L 6.03 52.09 C 6.74 54.29 7.69 56.25 8.9 57.97 C 10.1 59.69 11.49 61.16 13.08 62.36 C 14.67 63.56 16.43 64.48 18.38 65.12 C 20.32 65.76 22.39 66.08 24.59 66.08 L 24.62 66.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.760,
    height: 67.240,
    viewBox: "0 0 46.760 67.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 221.95,
      top: 1.53,
      width: 46.76,
      height: 67.24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.76 0 L 46.76 4.36 L 11.31 4.36 L 11.31 28.4 L 35.04 28.4 L 35.04 32.76 L 11.31 32.76 L 11.31 62.88 L 46.76 62.88 L 46.76 67.24 L 0 67.24 L 0 0 L 46.76 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 68.010,
    height: 70.330,
    viewBox: "0 0 68.010 70.330",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.22,
      top: 0.02,
      width: 68.01,
      height: 70.33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 41.23 4.81 C 37.17 4.81 33.43 5.53 30 6.97 C 26.57 8.41 23.61 10.47 21.13 13.16 C 18.65 15.85 16.71 19.09 15.32 22.9 C 13.93 26.7 13.24 30.96 13.24 35.65 C 13.24 40.34 13.99 44.65 15.5 48.45 C 17 52.25 19.07 55.49 21.69 58.16 C 24.31 60.83 27.39 62.88 30.94 64.32 C 34.49 65.76 38.29 66.48 42.35 66.48 C 45.29 66.48 47.95 66.08 50.31 65.29 C 52.68 64.5 54.81 63.36 56.7 61.87 L 56.7 38.29 L 43.97 38.29 L 43.97 34.28 L 68.01 34.28 L 68.01 63.84 C 66.05 64.89 64.07 65.82 62.08 66.63 C 60.08 67.44 57.93 68.12 55.61 68.66 C 53.29 69.2 50.75 69.62 47.98 69.9 C 45.21 70.19 42.06 70.33 38.55 70.33 C 34.83 70.33 31.3 69.92 27.95 69.09 C 24.6 68.26 21.5 67.09 18.64 65.57 C 15.78 64.05 13.21 62.23 10.91 60.12 C 8.61 58.01 6.66 55.67 5.05 53.1 C 3.44 50.53 2.2 47.78 1.32 44.83 C 0.44 41.89 0 38.83 0 35.65 C 0 32.47 0.41 29.44 1.24 26.45 C 2.07 23.46 3.26 20.64 4.82 17.98 C 6.37 15.33 8.27 12.9 10.5 10.7 C 12.73 8.5 15.25 6.61 18.06 5.02 C 20.87 3.43 23.92 2.2 27.24 1.32 C 30.55 0.44 34.07 0 37.79 0 C 41.51 0 44.63 0.48 47.65 1.45 C 50.68 2.41 53.43 3.69 55.92 5.28 C 58.4 6.87 60.61 8.7 62.54 10.78 C 64.47 12.86 66.12 15.03 67.51 17.3 L 62.64 20.55 C 59.8 15.11 56.65 11.13 53.18 8.61 C 49.71 6.09 45.73 4.83 41.24 4.83 L 41.23 4.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 348.73,
      top: 0,
      width: 205.01,
      height: 70.34,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 55.890,
    height: 68.820,
    viewBox: "0 0 55.890 68.820",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.52,
      width: 55.89,
      height: 68.82
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.01 L 6.34 0.01 L 50.41 49.2 L 50.92 49.2 L 50.92 0.01 L 55.89 0.01 L 55.89 68.82 L 53.25 68.82 L 5.53 14.15 L 5.12 14.15 L 5.12 67.24 L 0 67.24 L 0 0 L 0 0.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 74.190,
    height: 70.340,
    viewBox: "0 0 74.190 70.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 65.43,
      top: 0,
      width: 74.19,
      height: 70.34
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.07 70.34 C 31.86 70.34 27 69.41 22.49 67.55 C 17.98 65.69 14.05 63.15 10.73 59.92 C 7.4 56.69 4.78 52.92 2.87 48.61 C 0.96 44.3 0 39.69 0 34.79 C 0 31.58 0.43 28.49 1.29 25.51 C 2.15 22.54 3.38 19.76 4.97 17.19 C 6.56 14.62 8.48 12.28 10.73 10.17 C 12.98 8.06 15.47 6.25 18.21 4.74 C 20.95 3.24 23.91 2.07 27.08 1.24 C 30.26 0.41 33.59 0 37.07 0 C 40.55 0 43.88 0.41 47.06 1.24 C 50.24 2.07 53.2 3.24 55.96 4.74 C 58.72 6.24 61.21 8.05 63.44 10.17 C 65.67 12.28 67.59 14.62 69.2 17.19 C 70.81 19.76 72.04 22.53 72.9 25.51 C 73.76 28.49 74.19 31.58 74.19 34.79 C 74.19 38 73.76 41.17 72.9 44.2 C 72.04 47.23 70.8 50.06 69.2 52.69 C 67.59 55.33 65.68 57.73 63.44 59.89 C 61.21 62.05 58.72 63.91 55.96 65.47 C 53.2 67.03 50.24 68.23 47.06 69.07 C 43.88 69.91 40.55 70.34 37.07 70.34 Z M 37.07 67 C 40.92 67 44.33 66.2 47.29 64.59 C 50.25 62.98 52.74 60.75 54.77 57.87 C 56.8 55 58.33 51.6 59.36 47.68 C 60.39 43.76 60.91 39.46 60.91 34.8 C 60.91 30.14 60.39 25.93 59.36 22.07 C 58.33 18.22 56.8 14.89 54.77 12.11 C 52.74 9.32 50.25 7.16 47.29 5.62 C 44.33 4.08 40.93 3.31 37.07 3.31 C 33.21 3.31 29.71 4.08 26.75 5.62 C 23.79 7.16 21.31 9.32 19.3 12.11 C 17.29 14.9 15.78 18.22 14.76 22.07 C 13.75 25.92 13.24 30.17 13.24 34.8 C 13.24 39.43 13.75 43.76 14.76 47.68 C 15.77 51.6 17.29 55 19.3 57.87 C 21.31 60.74 23.8 62.98 26.75 64.59 C 29.71 66.2 33.15 67 37.07 67 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 55.890,
    height: 68.820,
    viewBox: "0 0 55.890 68.820",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.12,
      top: 1.52,
      width: 55.89,
      height: 68.82
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.01 L 6.34 0.01 L 50.41 49.2 L 50.92 49.2 L 50.92 0.01 L 55.89 0.01 L 55.89 68.82 L 53.25 68.82 L 5.53 14.15 L 5.12 14.15 L 5.12 67.24 L 0 67.24 L 0 0 L 0 0.01 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 587.33,
      height: 612.5,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.01,
      width: 587.35,
      height: 612.51,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 587.350,
    height: 612.510,
    viewBox: "0 0 587.350 612.510",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 587.35,
      height: 612.51
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 115.26 308.25 C 115.26 349.18 121.44 385.9 133.81 418.43 C 146.17 450.96 163.18 478.49 184.82 501.01 C 206.46 523.53 232 540.75 261.44 552.68 C 290.87 564.6 322.82 570.56 357.27 570.56 C 377.87 570.56 397.74 566.59 416.89 558.64 C 436.03 550.69 453.76 540.31 470.1 527.51 C 486.44 514.7 501.08 500.28 514.04 484.23 C 526.99 468.19 537.59 451.93 545.84 435.43 L 587.35 461.93 C 575.27 481.66 561 500.57 544.51 518.68 C 528.02 536.79 508.96 552.84 487.32 566.81 C 465.68 580.79 441.24 591.91 414.01 600.15 C 386.78 608.39 356.38 612.51 322.82 612.51 C 274.24 612.51 230.15 604.41 190.56 588.22 C 150.96 572.03 117.03 550.1 88.77 522.42 C 60.51 494.75 38.65 462.44 23.19 425.49 C 7.73 388.55 0 349.47 0 308.25 C 0 280.87 3.53 254.15 10.6 228.1 C 17.67 202.05 27.89 177.61 41.29 154.79 C 54.69 131.98 71.02 111.07 90.31 92.08 C 109.59 73.09 131.38 56.75 155.67 43.06 C 179.96 29.37 206.52 18.77 235.38 11.26 C 264.23 3.75 295 0 327.67 0 C 360.34 0 387.65 4.2 414 12.59 C 440.34 20.98 464.34 32.1 485.98 45.93 C 507.62 59.77 526.9 75.74 543.83 93.84 C 560.76 111.95 575.25 130.87 587.33 150.59 L 544.49 178.85 C 520.05 131.46 492.67 96.79 462.35 74.85 C 432.03 52.92 397.14 41.95 357.69 41.95 C 323.83 41.95 292.18 48.13 262.75 60.5 C 233.31 72.86 207.62 90.53 185.69 113.49 C 163.76 136.45 146.53 164.35 134.02 197.17 C 121.5 230 115.25 267.02 115.25 308.23 L 115.26 308.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 310.69,
      height: 531.16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(16,16,15)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.002,
      width: 310.69,
      height: 531.166,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 310.690,
    height: 531.166,
    viewBox: "0 0 310.690 531.166",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 310.69,
      height: 531.166
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 148.17 0.148 C 233.81 -3.402 304.6 57.418 310.69 142.578 L 310.69 388.668 C 303.71 484.458 215.11 547.178 120.75 527.578 C 54.01 513.708 3.97 455.878 0 388.228 L 0 142.578 C 5.47 63.408 68.45 3.448 148.17 0.148 Z M 151.47 272.718 C 163.99 278.858 177.69 283.678 190.47 289.628 C 215.07 301.098 239.81 314.358 259.63 333.028 C 275.46 319.988 288.6 302.768 296.97 284.078 C 295.57 238.828 298.79 192.528 296.98 147.398 C 294.41 83.198 248.12 28.138 184.2 16.398 C 96.88 0.378 17.88 58.888 13.72 147.408 C 14.12 159.688 13.25 172.068 13.74 184.338 C 13.76 184.868 13.41 185.968 14.18 185.868 C 23.45 149.148 47.88 116.048 80.16 96.058 C 119.11 71.928 169.76 66.078 212.42 84.168 C 220.52 87.608 228.09 92.108 235.44 96.898 C 235.15 97.358 234.02 97.128 233.56 97.008 C 229.16 95.948 223.81 92.938 219.3 91.388 C 113.05 54.878 8.29 150.918 33.17 257.818 C 50.82 333.618 127.21 384.678 204.8 362.618 C 207.81 361.768 217.79 359.148 219.3 357.708 C 219.59 357.438 227.6 367.638 229.24 370.198 C 230.08 371.518 221.49 375.018 219.81 375.758 C 142.7 409.678 48.34 366.958 19.6 289.668 L 13.74 272.428 L 13.72 383.388 C 15.21 425.428 35.92 464.888 69.8 489.838 C 131.95 535.618 225.83 522.968 270.77 459.738 C 279.97 446.788 283.13 426.698 281.41 411.108 C 274.34 346.808 185.44 326.948 137.64 301.218 C 101.22 281.608 73.33 255.048 82.54 210.018 C 92.26 162.498 145.56 141.728 189.87 150.928 C 202.96 153.648 229.56 164.158 241.65 160.618 C 246.81 159.108 245.34 152.978 245.17 148.958 C 246.77 149.348 248.96 147.778 250.07 149.148 L 265 212.028 L 260.22 213.548 C 258.91 207.658 256.94 202.578 253.5 197.588 C 239.64 177.518 200.88 157.768 176.8 155.108 C 146.06 151.718 108.94 166.748 100.94 198.858 C 91.67 236.078 122.13 258.328 151.46 272.708 L 151.47 272.718 Z M 294.74 404.248 L 296.98 383.838 L 296.74 297.478 C 290.19 313.878 280.9 329.308 268.67 342.138 C 280.63 356.488 289.21 373.488 292.85 391.858 L 294.75 404.248 L 294.74 404.248 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 776.41,
      height: 56.86,
      overflow: "hidden",
      position: "relative",
      color: "rgb(16,16,15)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.01,
      top: -0.02,
      width: 776.42,
      height: 56.88,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 776.42,
      height: 56.88,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 601.632,
      height: 56.88,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 54.966,
    height: 56.820,
    viewBox: "0 0 54.966 56.820",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.04,
      width: 54.966,
      height: 56.82
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.798 28.6 C 10.798 32.4 11.372 35.81 12.532 38.82 C 13.691 41.84 15.284 44.39 17.3 46.48 C 19.327 48.57 21.716 50.17 24.469 51.27 C 27.221 52.38 30.215 52.93 33.431 52.93 C 35.357 52.93 37.222 52.56 39.007 51.82 C 40.801 51.08 42.454 50.12 43.987 48.93 C 45.519 47.74 46.88 46.4 48.1 44.91 C 49.31 43.42 50.308 41.91 51.074 40.38 L 54.956 42.84 C 53.827 44.67 52.486 46.43 50.943 48.11 C 49.401 49.79 47.616 51.28 45.59 52.58 C 43.563 53.88 41.275 54.91 38.734 55.67 C 36.184 56.43 33.341 56.82 30.205 56.82 C 25.658 56.82 21.535 56.07 17.835 54.57 C 14.135 53.07 10.959 51.03 8.307 48.46 C 5.666 45.89 3.619 42.89 2.168 39.46 C 0.726 36.03 0 32.41 0 28.58 C 0 26.04 0.333 23.56 0.988 21.14 C 1.643 18.72 2.601 16.45 3.861 14.34 C 5.111 12.22 6.644 10.28 8.449 8.52 C 10.253 6.76 12.29 5.24 14.568 3.97 C 16.847 2.7 19.327 1.72 22.029 1.02 C 24.731 0.35 27.614 0 30.669 0 C 33.724 0 36.284 0.39 38.744 1.17 C 41.204 1.95 43.453 2.98 45.479 4.26 C 47.505 5.54 49.31 7.03 50.893 8.71 C 52.476 10.39 53.837 12.15 54.966 13.98 L 50.953 16.6 C 48.665 12.2 46.104 8.98 43.271 6.95 C 40.438 4.92 37.172 3.9 33.482 3.9 C 30.316 3.9 27.352 4.47 24.6 5.62 C 21.847 6.77 19.438 8.41 17.391 10.54 C 15.334 12.67 13.731 15.26 12.562 18.31 C 11.392 21.36 10.808 24.79 10.808 28.62 L 10.798 28.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 54.492,
    height: 55.570,
    viewBox: "0 0 54.492 55.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 54.966,
      top: 0.04,
      width: 54.492,
      height: 55.57
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.713 0 L 54.492 55.57 L 45.116 55.57 L 36.768 37.46 L 13.258 37.46 L 4.628 55.57 L 0 55.57 L 26.394 0 L 28.703 0 L 28.713 0 Z M 14.871 33.93 L 35.075 33.93 L 25.114 12.42 L 14.871 33.93 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45.408,
    height: 54.350,
    viewBox: "0 0 45.408 54.350",
    fill: "none",
    style: {
      position: "absolute",
      left: 114.237,
      top: 1.27,
      width: 45.408,
      height: 54.35
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 19.004 0 C 22.281 0 25.164 0.35 27.634 1.05 C 30.114 1.75 32.181 2.72 33.835 3.98 C 35.488 5.24 36.728 6.73 37.575 8.47 C 38.412 10.21 38.835 12.1 38.835 14.15 C 38.835 15.84 38.512 17.43 37.867 18.9 C 37.222 20.38 36.315 21.71 35.145 22.9 C 33.976 24.09 32.564 25.11 30.911 25.97 C 29.257 26.83 27.443 27.51 25.457 28 L 45.408 54.35 L 34.712 54.35 L 15.667 28.82 L 9.225 28.82 L 9.225 54.35 L 0.01 54.35 L 0.01 0 L 0 0 Z M 9.215 26.06 L 14.548 26.06 C 16.615 26.06 18.52 25.79 20.275 25.24 C 22.019 24.69 23.541 23.92 24.821 22.92 C 26.102 21.92 27.1 20.71 27.816 19.29 C 28.532 17.87 28.894 16.27 28.894 14.5 C 28.894 12.86 28.612 11.36 28.048 9.99 C 27.483 8.62 26.687 7.46 25.648 6.49 C 24.62 5.52 23.39 4.76 21.968 4.22 C 20.547 3.67 19.004 3.4 17.321 3.4 L 9.225 3.4 L 9.225 26.06 L 9.215 26.06 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 60.430,
    height: 56.840,
    viewBox: "0 0 60.430 56.840",
    fill: "none",
    style: {
      position: "absolute",
      left: 157.75,
      top: 0.04,
      width: 60.43,
      height: 56.84
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.205 56.84 C 25.961 56.84 22.009 56.09 18.329 54.59 C 14.649 53.09 11.453 51.03 8.741 48.42 C 6.029 45.81 3.892 42.76 2.339 39.28 C 0.786 35.8 0 32.07 0 28.11 C 0 25.52 0.353 23.02 1.059 20.61 C 1.764 18.21 2.762 15.97 4.053 13.89 C 5.343 11.81 6.906 9.92 8.741 8.21 C 10.576 6.5 12.602 5.04 14.83 3.83 C 17.058 2.61 19.468 1.67 22.059 1 C 24.65 0.33 27.362 0 30.195 0 C 33.028 0 35.75 0.33 38.331 1 C 40.922 1.67 43.332 2.61 45.58 3.83 C 47.828 5.05 49.855 6.51 51.669 8.21 C 53.484 9.92 55.047 11.81 56.357 13.89 C 57.668 15.97 58.666 18.21 59.372 20.61 C 60.077 23.01 60.43 25.51 60.43 28.11 C 60.43 30.71 60.077 33.27 59.372 35.71 C 58.666 38.16 57.668 40.44 56.357 42.57 C 55.047 44.7 53.484 46.64 51.669 48.39 C 49.855 50.14 47.818 51.64 45.58 52.9 C 43.332 54.16 40.922 55.13 38.331 55.81 C 35.74 56.49 33.028 56.83 30.195 56.83 L 30.205 56.84 Z M 30.205 54.14 C 33.341 54.14 36.123 53.49 38.533 52.19 C 40.942 50.89 42.979 49.08 44.622 46.76 C 46.275 44.44 47.516 41.69 48.362 38.52 C 49.199 35.35 49.623 31.88 49.623 28.11 C 49.623 24.34 49.199 20.94 48.362 17.82 C 47.526 14.71 46.275 12.02 44.622 9.77 C 42.969 7.52 40.942 5.77 38.533 4.52 C 36.123 3.28 33.351 2.66 30.205 2.66 C 27.06 2.66 24.206 3.28 21.797 4.52 C 19.387 5.76 17.361 7.51 15.728 9.77 C 14.084 12.02 12.854 14.71 12.028 17.82 C 11.201 20.93 10.788 24.36 10.788 28.11 C 10.788 31.86 11.201 35.35 12.028 38.52 C 12.854 41.69 14.084 44.44 15.728 46.76 C 17.371 49.08 19.387 50.89 21.797 52.19 C 24.206 53.49 27.009 54.14 30.205 54.14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.819,
    height: 54.340,
    viewBox: "0 0 36.819 54.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 225.943,
      top: 1.27,
      width: 36.819,
      height: 54.34
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 9.215 0 L 9.215 50.82 L 36.819 50.82 L 36.819 54.34 L 0.01 54.34 L 0.01 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.089,
    height: 54.320,
    viewBox: "0 0 38.089 54.320",
    fill: "none",
    style: {
      position: "absolute",
      left: 268.499,
      top: 1.27,
      width: 38.089,
      height: 54.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.089 0 L 38.089 3.52 L 9.205 3.52 L 9.205 22.94 L 28.542 22.94 L 28.542 26.46 L 9.205 26.46 L 9.205 50.8 L 38.089 50.8 L 38.089 54.32 L 0 54.32 L 0 0 L 38.089 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 325.249,
      top: 0,
      width: 276.383,
      height: 56.88,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 39.057,
    height: 56.850,
    viewBox: "0 0 39.057 56.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.03,
      width: 39.057,
      height: 56.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.083 53.39 C 21.434 53.39 22.765 53.21 24.096 52.84 C 25.416 52.47 26.606 51.92 27.644 51.2 C 28.693 50.48 29.53 49.59 30.165 48.54 C 30.8 47.49 31.112 46.27 31.112 44.87 C 31.112 43.2 30.679 41.72 29.812 40.42 C 28.945 39.12 27.806 37.93 26.404 36.85 C 25.003 35.77 23.39 34.75 21.595 33.8 C 19.791 32.84 17.956 31.89 16.08 30.93 C 14.205 29.97 12.37 28.97 10.566 27.92 C 8.761 26.87 7.158 25.69 5.757 24.4 C 4.355 23.1 3.216 21.65 2.349 20.06 C 1.482 18.47 1.049 16.62 1.049 14.55 C 1.049 12.48 1.442 10.55 2.228 8.77 C 3.014 6.99 4.164 5.46 5.676 4.16 C 7.188 2.86 9.053 1.84 11.271 1.11 C 13.489 0.37 16.03 0 18.893 0 C 21.484 0 23.793 0.27 25.83 0.82 C 27.866 1.37 29.661 2.17 31.203 3.24 C 32.746 4.31 34.056 5.62 35.125 7.17 C 36.204 8.73 37.071 10.53 37.726 12.58 L 33.018 14.71 C 32.463 13.04 31.768 11.52 30.911 10.14 C 30.054 8.76 29.036 7.58 27.856 6.6 C 26.676 5.62 25.305 4.86 23.743 4.33 C 22.19 3.8 20.426 3.53 18.47 3.53 C 16.736 3.53 15.224 3.77 13.923 4.25 C 12.633 4.73 11.544 5.36 10.677 6.14 C 9.81 6.92 9.164 7.79 8.731 8.76 C 8.307 9.73 8.086 10.72 8.086 11.73 C 8.086 13.15 8.529 14.46 9.406 15.64 C 10.283 16.83 11.453 17.95 12.915 19 C 14.377 20.05 16.03 21.07 17.895 22.05 C 19.75 23.03 21.646 24.03 23.571 25.04 C 25.497 26.05 27.392 27.1 29.247 28.2 C 31.102 29.29 32.766 30.49 34.228 31.79 C 35.69 33.09 36.859 34.51 37.736 36.05 C 38.613 37.59 39.057 39.32 39.057 41.23 C 39.057 43.39 38.644 45.42 37.817 47.32 C 36.99 49.22 35.75 50.87 34.097 52.28 C 32.443 53.69 30.397 54.8 27.937 55.62 C 25.487 56.44 22.634 56.85 19.387 56.85 C 16.746 56.85 14.387 56.56 12.32 55.99 C 10.253 55.42 8.428 54.58 6.846 53.49 C 5.263 52.4 3.902 51.07 2.772 49.49 C 1.643 47.92 0.716 46.12 0 44.1 L 4.92 42.09 C 5.495 43.87 6.281 45.45 7.259 46.84 C 8.237 48.23 9.376 49.42 10.667 50.38 C 11.957 51.35 13.399 52.09 14.982 52.61 C 16.564 53.13 18.248 53.39 20.043 53.39 L 20.083 53.39 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.089,
    height: 54.320,
    viewBox: "0 0 38.089 54.320",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.83,
      top: 1.25,
      width: 38.089,
      height: 54.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.089 0 L 38.089 3.52 L 9.205 3.52 L 9.205 22.94 L 28.542 22.94 L 28.542 26.46 L 9.205 26.46 L 9.205 50.8 L 38.089 50.8 L 38.089 54.32 L 0 54.32 L 0 0 L 38.089 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 39.057,
    height: 56.850,
    viewBox: "0 0 39.057 56.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.942,
      top: 0.03,
      width: 39.057,
      height: 56.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.083 53.39 C 21.434 53.39 22.765 53.21 24.096 52.84 C 25.426 52.47 26.606 51.92 27.644 51.2 C 28.693 50.48 29.53 49.59 30.165 48.54 C 30.8 47.49 31.112 46.27 31.112 44.87 C 31.112 43.2 30.679 41.72 29.812 40.42 C 28.945 39.12 27.806 37.93 26.404 36.85 C 25.003 35.77 23.39 34.75 21.595 33.8 C 19.791 32.84 17.956 31.89 16.08 30.93 C 14.205 29.97 12.37 28.97 10.566 27.92 C 8.761 26.87 7.158 25.69 5.757 24.4 C 4.355 23.1 3.216 21.65 2.349 20.06 C 1.482 18.46 1.048 16.62 1.048 14.55 C 1.048 12.48 1.442 10.55 2.228 8.77 C 3.014 6.99 4.164 5.46 5.676 4.16 C 7.188 2.86 9.053 1.84 11.271 1.11 C 13.489 0.37 16.03 0 18.893 0 C 21.484 0 23.793 0.27 25.83 0.82 C 27.866 1.37 29.661 2.17 31.203 3.24 C 32.746 4.31 34.056 5.62 35.125 7.17 C 36.194 8.72 37.071 10.53 37.726 12.58 L 33.018 14.71 C 32.463 13.04 31.768 11.52 30.911 10.14 C 30.054 8.76 29.036 7.58 27.856 6.6 C 26.676 5.62 25.305 4.86 23.743 4.33 C 22.19 3.8 20.426 3.53 18.47 3.53 C 16.736 3.53 15.224 3.77 13.923 4.25 C 12.633 4.73 11.544 5.36 10.677 6.14 C 9.81 6.92 9.164 7.79 8.731 8.76 C 8.307 9.73 8.086 10.72 8.086 11.73 C 8.086 13.15 8.529 14.46 9.406 15.64 C 10.283 16.83 11.453 17.95 12.915 19 C 14.377 20.05 16.03 21.07 17.895 22.05 C 19.75 23.03 21.646 24.03 23.571 25.04 C 25.497 26.05 27.392 27.1 29.247 28.2 C 31.102 29.29 32.766 30.49 34.228 31.79 C 35.69 33.09 36.859 34.51 37.736 36.05 C 38.613 37.59 39.057 39.32 39.057 41.23 C 39.057 43.39 38.644 45.42 37.817 47.32 C 36.99 49.22 35.75 50.87 34.097 52.28 C 32.443 53.69 30.397 54.8 27.937 55.62 C 25.487 56.44 22.634 56.85 19.387 56.85 C 16.746 56.85 14.387 56.56 12.32 55.99 C 10.253 55.42 8.428 54.58 6.846 53.49 C 5.263 52.4 3.902 51.07 2.772 49.49 C 1.643 47.92 0.716 46.12 0 44.1 L 4.92 42.09 C 5.495 43.87 6.281 45.45 7.259 46.84 C 8.237 48.23 9.376 49.42 10.667 50.38 C 11.957 51.35 13.399 52.09 14.982 52.61 C 16.564 53.13 18.248 53.39 20.043 53.39 L 20.083 53.39 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 39.057,
    height: 56.850,
    viewBox: "0 0 39.057 56.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 134.028,
      top: 0.03,
      width: 39.057,
      height: 56.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.083 53.39 C 21.434 53.39 22.765 53.21 24.096 52.84 C 25.416 52.47 26.606 51.92 27.644 51.2 C 28.693 50.48 29.53 49.59 30.165 48.54 C 30.8 47.49 31.112 46.27 31.112 44.87 C 31.112 43.2 30.679 41.72 29.812 40.42 C 28.945 39.12 27.806 37.93 26.404 36.85 C 25.003 35.77 23.39 34.75 21.595 33.8 C 19.791 32.84 17.956 31.89 16.08 30.93 C 14.205 29.97 12.37 28.97 10.566 27.92 C 8.761 26.87 7.158 25.69 5.757 24.4 C 4.355 23.1 3.216 21.65 2.349 20.06 C 1.482 18.46 1.048 16.62 1.048 14.55 C 1.048 12.48 1.442 10.55 2.228 8.77 C 3.014 6.99 4.164 5.46 5.676 4.16 C 7.188 2.86 9.053 1.84 11.271 1.11 C 13.489 0.37 16.03 0 18.893 0 C 21.484 0 23.793 0.27 25.83 0.82 C 27.866 1.37 29.661 2.17 31.203 3.24 C 32.746 4.31 34.056 5.62 35.125 7.17 C 36.194 8.72 37.071 10.53 37.726 12.58 L 33.018 14.71 C 32.463 13.04 31.768 11.52 30.911 10.14 C 30.054 8.76 29.036 7.58 27.856 6.6 C 26.676 5.62 25.305 4.86 23.743 4.33 C 22.19 3.8 20.426 3.53 18.47 3.53 C 16.736 3.53 15.224 3.77 13.923 4.25 C 12.633 4.73 11.544 5.36 10.677 6.14 C 9.81 6.92 9.164 7.79 8.731 8.76 C 8.307 9.73 8.086 10.72 8.086 11.73 C 8.086 13.15 8.529 14.46 9.406 15.64 C 10.283 16.83 11.453 17.95 12.915 19 C 14.377 20.05 16.03 21.07 17.895 22.05 C 19.76 23.03 21.646 24.03 23.571 25.04 C 25.497 26.05 27.392 27.1 29.247 28.2 C 31.102 29.29 32.766 30.49 34.228 31.79 C 35.69 33.09 36.859 34.51 37.736 36.05 C 38.613 37.59 39.057 39.32 39.057 41.23 C 39.057 43.39 38.644 45.42 37.817 47.32 C 36.99 49.22 35.75 50.87 34.097 52.28 C 32.443 53.69 30.397 54.8 27.937 55.62 C 25.487 56.44 22.634 56.85 19.387 56.85 C 16.746 56.85 14.387 56.56 12.32 55.99 C 10.253 55.42 8.428 54.58 6.846 53.49 C 5.263 52.4 3.902 51.07 2.772 49.49 C 1.643 47.92 0.716 46.12 0 44.1 L 4.92 42.09 C 5.495 43.87 6.281 45.45 7.259 46.84 C 8.237 48.23 9.376 49.42 10.667 50.38 C 11.957 51.35 13.399 52.09 14.982 52.61 C 16.564 53.13 18.248 53.39 20.043 53.39 L 20.083 53.39 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.089,
    height: 54.320,
    viewBox: "0 0 38.089 54.320",
    fill: "none",
    style: {
      position: "absolute",
      left: 180.858,
      top: 1.25,
      width: 38.089,
      height: 54.32
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.089 0 L 38.089 3.52 L 9.205 3.52 L 9.205 22.94 L 28.542 22.94 L 28.542 26.46 L 9.205 26.46 L 9.205 50.8 L 38.089 50.8 L 38.089 54.32 L 0 54.32 L 0 0 L 38.089 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 55.400,
    height: 56.850,
    viewBox: "0 0 55.400 56.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 220.983,
      top: 0,
      width: 55.4,
      height: 56.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.603 3.91 C 30.296 3.91 27.251 4.49 24.448 5.65 C 21.656 6.81 19.246 8.48 17.22 10.65 C 15.193 12.82 13.621 15.44 12.491 18.52 C 11.362 21.59 10.798 25.03 10.798 28.83 C 10.798 32.63 11.413 36.1 12.633 39.18 C 13.863 42.25 15.536 44.87 17.673 47.03 C 19.811 49.19 22.321 50.85 25.215 52.01 C 28.108 53.17 31.203 53.75 34.51 53.75 C 36.91 53.75 39.067 53.43 40.993 52.79 C 42.918 52.15 44.652 51.23 46.195 50.02 L 46.195 30.96 L 35.821 30.96 L 35.821 27.72 L 55.4 27.72 L 55.4 51.61 C 53.807 52.46 52.194 53.21 50.57 53.86 C 48.947 54.52 47.193 55.06 45.298 55.5 C 43.412 55.94 41.335 56.27 39.077 56.5 C 36.819 56.73 34.258 56.85 31.395 56.85 C 28.36 56.85 25.487 56.52 22.765 55.85 C 20.043 55.18 17.512 54.23 15.183 53 C 12.854 51.77 10.757 50.3 8.882 48.59 C 7.007 46.88 5.414 44.99 4.113 42.91 C 2.803 40.83 1.795 38.61 1.079 36.23 C 0.363 33.85 0 31.38 0 28.81 C 0 26.24 0.333 23.79 1.008 21.37 C 1.684 18.95 2.652 16.67 3.922 14.53 C 5.192 12.39 6.735 10.43 8.549 8.65 C 10.364 6.87 12.421 5.34 14.709 4.06 C 16.998 2.78 19.488 1.78 22.19 1.07 C 24.892 0.36 27.755 0 30.78 0 C 33.804 0 36.355 0.39 38.815 1.17 C 41.275 1.95 43.523 2.98 45.55 4.26 C 47.576 5.54 49.371 7.03 50.943 8.71 C 52.516 10.39 53.867 12.15 54.996 13.98 L 51.034 16.6 C 48.725 12.2 46.155 8.98 43.332 6.95 C 40.509 4.92 37.262 3.9 33.603 3.9 L 33.603 3.91 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 609.395,
      top: 0.02,
      width: 167.025,
      height: 56.84,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.529,
    height: 55.610,
    viewBox: "0 0 45.529 55.610",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.23,
      width: 45.529,
      height: 55.61
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.162 0 L 41.063 39.75 L 41.477 39.75 L 41.477 0 L 45.529 0 L 45.529 55.61 L 43.382 55.61 L 4.507 11.43 L 4.174 11.43 L 4.174 54.34 L 0 54.34 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 60.430,
    height: 56.840,
    viewBox: "0 0 60.430 56.840",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.303,
      top: 0,
      width: 60.43,
      height: 56.84
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.205 56.84 C 25.961 56.84 22.009 56.09 18.329 54.59 C 14.649 53.09 11.453 51.03 8.741 48.42 C 6.029 45.81 3.892 42.76 2.339 39.28 C 0.786 35.8 0 32.07 0 28.11 C 0 25.52 0.353 23.02 1.059 20.61 C 1.764 18.21 2.762 15.97 4.053 13.89 C 5.343 11.81 6.906 9.92 8.741 8.21 C 10.576 6.5 12.602 5.04 14.83 3.83 C 17.058 2.61 19.468 1.67 22.059 1 C 24.65 0.33 27.362 0 30.195 0 C 33.028 0 35.75 0.33 38.331 1 C 40.922 1.67 43.332 2.61 45.58 3.83 C 47.828 5.05 49.855 6.51 51.669 8.21 C 53.484 9.92 55.047 11.81 56.357 13.89 C 57.668 15.97 58.666 18.21 59.372 20.61 C 60.077 23.01 60.43 25.51 60.43 28.11 C 60.43 30.71 60.077 33.27 59.372 35.71 C 58.666 38.16 57.668 40.44 56.357 42.57 C 55.047 44.7 53.484 46.64 51.669 48.39 C 49.855 50.14 47.818 51.64 45.58 52.9 C 43.332 54.16 40.922 55.13 38.331 55.81 C 35.74 56.49 33.028 56.83 30.195 56.83 L 30.205 56.84 Z M 30.205 54.14 C 33.341 54.14 36.123 53.49 38.533 52.19 C 40.942 50.89 42.979 49.08 44.622 46.76 C 46.276 44.44 47.516 41.69 48.362 38.52 C 49.199 35.35 49.623 31.88 49.623 28.11 C 49.623 24.34 49.199 20.94 48.362 17.82 C 47.526 14.71 46.276 12.02 44.622 9.77 C 42.969 7.52 40.942 5.77 38.533 4.52 C 36.123 3.28 33.351 2.66 30.205 2.66 C 27.06 2.66 24.206 3.28 21.797 4.52 C 19.387 5.76 17.361 7.51 15.728 9.77 C 14.084 12.02 12.854 14.71 12.028 17.82 C 11.201 20.93 10.788 24.36 10.788 28.11 C 10.788 31.86 11.201 35.35 12.028 38.52 C 12.854 41.69 14.084 44.44 15.728 46.76 C 17.371 49.08 19.387 50.89 21.797 52.19 C 24.206 53.49 27.009 54.14 30.205 54.14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45.529,
    height: 55.610,
    viewBox: "0 0 45.529 55.610",
    fill: "none",
    style: {
      position: "absolute",
      left: 121.496,
      top: 1.23,
      width: 45.529,
      height: 55.61
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.162 0 L 41.063 39.75 L 41.477 39.75 L 41.477 0 L 45.529 0 L 45.529 55.61 L 43.382 55.61 L 4.507 11.43 L 4.174 11.43 L 4.174 54.34 L 0 54.34 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 417.31,
      height: 612.5,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 417.31,
      height: 612.48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 417.310,
    height: 612.480,
    viewBox: "0 0 417.310 612.480",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 417.31,
      height: 612.48
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 214.18 575.41 C 228.6 575.41 242.88 573.42 257.02 569.45 C 271.15 565.48 283.8 559.59 295 551.79 C 306.19 543.99 315.16 534.42 321.94 523.09 C 328.71 511.76 332.1 498.58 332.1 483.57 C 332.1 465.62 327.46 449.64 318.19 435.66 C 308.92 421.68 296.77 408.88 281.76 397.24 C 266.75 385.61 249.59 374.65 230.31 364.34 C 211.03 354.04 191.38 343.74 171.36 333.43 C 151.34 323.13 131.68 312.31 112.41 300.97 C 93.13 289.64 75.98 276.98 60.96 262.99 C 45.95 249.01 33.8 233.4 24.53 216.18 C 15.26 198.96 10.62 179.16 10.62 156.78 C 10.62 134.4 14.82 113.66 23.21 94.51 C 31.6 75.38 43.89 58.81 60.08 44.83 C 76.27 30.85 96.22 19.88 119.92 11.93 C 143.59 3.97 170.75 0 201.37 0 C 229.04 0 253.77 2.95 275.56 8.83 C 297.35 14.72 316.48 23.4 332.97 34.88 C 349.46 46.36 363.44 60.49 374.92 77.27 C 386.4 94.05 395.68 113.48 402.74 135.56 L 352.4 158.52 C 346.51 140.57 339 124.15 329.88 109.28 C 320.75 94.42 309.86 81.68 297.2 71.08 C 284.54 60.48 269.89 52.31 253.26 46.57 C 236.63 40.83 217.86 37.96 196.96 37.96 C 178.41 37.96 162.22 40.54 148.38 45.69 C 134.54 50.84 122.99 57.61 113.71 66 C 104.44 74.39 97.52 83.82 92.95 94.26 C 88.38 104.71 86.11 115.39 86.11 126.28 C 86.11 141.59 90.81 155.65 100.24 168.45 C 109.66 181.26 122.17 193.33 137.78 204.66 C 153.38 215.99 171.12 226.96 190.99 237.56 C 210.86 248.16 231.1 258.91 251.71 269.8 C 272.31 280.7 292.56 292.03 312.43 303.8 C 332.3 315.58 350.03 328.46 365.64 342.44 C 381.24 356.42 393.75 371.74 403.18 388.37 C 412.6 405 417.31 423.63 417.31 444.23 C 417.31 467.49 412.89 489.35 404.06 509.81 C 395.23 530.28 381.98 548.08 364.32 563.24 C 346.66 578.41 324.72 590.4 298.52 599.23 C 272.31 608.06 241.84 612.48 207.11 612.48 C 178.85 612.48 153.68 609.39 131.6 603.21 C 109.52 597.03 90.02 588.05 73.09 576.27 C 56.16 564.5 41.66 550.15 29.59 533.21 C 17.51 516.28 7.66 496.93 0 475.14 L 52.55 453.5 C 58.73 472.64 67.05 489.71 77.5 504.73 C 87.95 519.74 100.09 532.48 113.93 542.93 C 127.77 553.38 143.14 561.41 160.08 567 C 177.01 572.6 195.03 575.39 214.18 575.39 L 214.18 575.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 587.44,
      height: 342.85,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 587.43,
      height: 342.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 587.43,
      height: 342.86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 328.780,
    height: 342.830,
    viewBox: "0 0 328.780 342.830",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.01,
      width: 328.78,
      height: 342.83
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64.52 172.53 C 64.52 195.44 67.98 216 74.9 234.2 C 81.82 252.41 91.34 267.82 103.45 280.42 C 115.56 293.03 129.86 302.67 146.34 309.34 C 162.82 316.01 180.7 319.35 199.98 319.35 C 211.51 319.35 222.64 317.13 233.35 312.68 C 244.06 308.23 253.99 302.42 263.14 295.25 C 272.29 288.08 280.48 280.01 287.74 271.03 C 294.99 262.05 300.92 252.95 305.54 243.72 L 328.78 258.55 C 322.02 269.59 314.03 280.18 304.8 290.31 C 295.57 300.44 284.9 309.43 272.79 317.25 C 260.68 325.08 247 331.3 231.76 335.91 C 216.52 340.52 199.5 342.83 180.72 342.83 C 153.53 342.83 128.85 338.3 106.69 329.23 C 84.53 320.17 65.53 307.89 49.71 292.4 C 33.89 276.91 21.65 258.82 13 238.14 C 4.33 217.48 0 195.6 0 172.53 C 0 157.2 1.98 142.25 5.93 127.67 C 9.89 113.09 15.61 99.41 23.11 86.64 C 30.61 73.87 39.75 62.17 50.55 51.54 C 61.34 40.91 73.54 31.76 87.13 24.1 C 100.73 16.44 115.59 10.5 131.75 6.3 C 147.9 2.1 165.12 0 183.41 0 C 201.7 0 216.99 2.35 231.74 7.04 C 246.49 11.74 259.92 17.96 272.03 25.7 C 284.14 33.45 294.93 42.39 304.41 52.52 C 313.89 62.65 322 73.25 328.76 84.28 L 304.78 100.1 C 291.1 73.57 275.77 54.16 258.8 41.89 C 241.83 29.62 222.3 23.47 200.22 23.47 C 181.27 23.47 163.55 26.93 147.07 33.85 C 130.59 40.77 116.21 50.66 103.94 63.51 C 91.66 76.36 82.02 91.98 75.02 110.35 C 68.01 128.73 64.51 149.45 64.51 172.52 L 64.52 172.53 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 233.600,
    height: 342.860,
    viewBox: "0 0 233.600 342.860",
    fill: "none",
    style: {
      position: "absolute",
      left: 353.83,
      top: 0,
      width: 233.6,
      height: 342.86
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 119.9 322.09 C 127.97 322.09 135.97 320.98 143.88 318.75 C 151.79 316.53 158.87 313.23 165.14 308.86 C 171.4 304.5 176.43 299.14 180.22 292.79 C 184.01 286.45 185.91 279.07 185.91 270.67 C 185.91 260.62 183.31 251.68 178.12 243.85 C 172.93 236.03 166.13 228.86 157.73 222.34 C 149.33 215.83 139.72 209.7 128.93 203.92 C 118.14 198.16 107.14 192.39 95.93 186.62 C 84.72 180.86 73.72 174.8 62.93 168.45 C 52.14 162.11 42.54 155.02 34.13 147.19 C 25.73 139.37 18.93 130.63 13.74 120.99 C 8.55 111.35 5.95 100.27 5.95 87.74 C 5.95 75.21 8.3 63.6 12.99 52.89 C 17.69 42.18 24.57 32.91 33.63 25.08 C 42.69 17.26 53.86 11.11 67.12 6.66 C 80.39 2.22 95.59 0 112.73 0 C 128.22 0 142.06 1.65 154.26 4.94 C 166.45 8.24 177.16 13.1 186.39 19.52 C 195.62 25.95 203.45 33.86 209.87 43.25 C 216.3 52.64 221.49 63.52 225.44 75.88 L 197.26 88.73 C 193.96 78.68 189.76 69.49 184.65 61.17 C 179.54 52.85 173.44 45.72 166.36 39.79 C 159.27 33.86 151.07 29.28 141.76 26.07 C 132.45 22.86 121.94 21.25 110.24 21.25 C 99.86 21.25 90.79 22.7 83.05 25.58 C 75.3 28.46 68.84 32.25 63.65 36.95 C 58.46 41.65 54.59 46.92 52.03 52.77 C 49.47 58.62 48.2 64.6 48.2 70.69 C 48.2 79.26 50.83 87.13 56.11 94.3 C 61.38 101.47 68.38 108.23 77.12 114.57 C 85.85 120.91 95.78 127.05 106.91 132.99 C 118.03 138.92 129.36 144.94 140.9 151.03 C 152.43 157.13 163.76 163.48 174.89 170.06 C 186.01 176.65 195.94 183.86 204.68 191.69 C 213.41 199.52 220.41 208.09 225.69 217.4 C 230.96 226.71 233.6 237.14 233.6 248.67 C 233.6 261.69 231.13 273.92 226.18 285.38 C 221.24 296.84 213.82 306.8 203.93 315.29 C 194.04 323.78 181.77 330.49 167.1 335.44 C 152.43 340.38 135.37 342.86 115.93 342.86 C 100.11 342.86 86.02 341.13 73.66 337.67 C 61.3 334.21 50.38 329.19 40.91 322.59 C 31.43 316 23.32 307.97 16.56 298.49 C 9.8 289.01 4.28 278.18 0 265.98 L 29.42 253.87 C 32.88 264.58 37.54 274.14 43.39 282.54 C 49.24 290.94 56.03 298.07 63.78 303.92 C 71.53 309.77 80.13 314.26 89.61 317.39 C 99.09 320.52 109.18 322.09 119.89 322.09 L 119.9 322.09 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Property 1=CS-LOGO-COMBI 1
    "property1=cs-logo-combi 1": __body0,
    // figma: Property 1=C 1
    "property1=c 1": __body1,
    // figma: Property 1=CS-LOGOMARK 1
    "property1=cs-logomark 1": __body2,
    // figma: Property 1=CS-LOGOTYPE 1
    "property1=cs-logotype 1": __body3,
    // figma: Property 1=S 1
    "property1=s 1": __body4,
    // figma: Property 1=CS_ 1
    "property1=cs_ 1": __body5
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Logo, __ds_default_components_Logo_182b5jf: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Logo.jsx", error: String((e && e.message) || e) }); }

// components/Footer.jsx
try { (() => {
// figma node: 114:2649 footer
function Footer(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      backgroundColor: "var(--color-primary-950)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "85px 139px 85px 140px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 100,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 182,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 112,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--color-primary-300)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "MENU"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "58px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Accueil\nLa Maison  \nLes Pièces \nPasseport \nContact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-primary-300)",
      flexShrink: 0
    }
  }, props.text3 ?? "PLUS D’INFORMATIONS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "58px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? " Contact\nMentions légales\nCGV\nConfidentialité")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-primary-300)",
      flexShrink: 0
    }
  }, "SUIVEZ NOUS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "58px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Facebook\nX\nTikTok\nInstagram")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 604,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--color-primary-300)",
      flexShrink: 0
    }
  }, "RESTER INFORME"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "58px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Abonnez vous \xE0 notre newsletter"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 550,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adresse email"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "20px 30px 20px 30px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 401,
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Saisissez votre email")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "20px 30px 20px 30px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Envoyer")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 60,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\xA9 2026 Carole Sessegnon. Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    style: {
      position: "relative",
      height: 120,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto",
      color: "rgb(255,255,255)"
    },
    property1: "cs-logotype 1"
  }))));
}
Object.assign(__ds_scope, { Footer, __ds_default_components_Footer_104r1c9: Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Footer.jsx", error: String((e && e.message) || e) }); }

// components/Menu.jsx
try { (() => {
// figma node: 9:609 menu (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Menu(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-tertiary-500)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Accueil"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Accueil"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-primary-950)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Accueil"));
  const __impls = {
    // figma: Property 1=hover
    "property1=hover": __body0,
    // figma: Property 1=Default
    "property1=default": __body1,
    // figma: Property 1=focus
    "property1=focus": __body2
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { Menu, __ds_default_components_Menu_182bp1r: Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Menu.jsx", error: String((e && e.message) || e) }); }

// components/Navbar.jsx
try { (() => {
// figma node: 114:2457 navbar (4 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "property1=" + __venc(p.property1);
function Navbar(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "navbar default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1918,
      height: 119.093,
      display: "flex",
      flexDirection: "row",
      padding: "20px 140px 20px 140px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1640,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    style: {
      position: "relative",
      width: 180,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    },
    property1: "cs-logo-combi 1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Accueil")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "La Maison")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Les Pi\xE8ces")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Passeport")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 17,
      top: 17,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 C 4.823 4.237 4.823 3.763 4.53 3.47 L 4 4 L 3.47 4.53 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 L 16.75 8 C 16.75 3.168 12.833 -0.75 8 -0.75 L 8 0 L 8 0.75 C 12.004 0.75 15.25 3.996 15.25 8 L 16 8 Z M 8 0 L 8 -0.75 C 3.168 -0.75 -0.75 3.168 -0.75 8 L 0 8 L 0.75 8 C 0.75 3.996 3.996 0.75 8 0.75 L 8 0 Z M 0 8 L -0.75 8 C -0.75 12.833 3.168 16.75 8 16.75 L 8 16 L 8 15.25 C 3.996 15.25 0.75 12.004 0.75 8 L 0 8 Z M 8 16 L 8 16.75 C 12.833 16.75 16.75 12.833 16.75 8 L 16 8 L 15.25 8 C 15.25 12.004 12.004 15.25 8 15.25 L 8 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 15,
    viewBox: "0 0 16 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7,
      width: 16,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.414 0.586 L 14.884 1.116 L 14.884 1.116 L 15.414 0.586 Z M 14.975 13.975 L 15.505 14.505 L 15.505 14.505 L 14.975 13.975 Z M 1.025 13.975 L 0.495 14.505 L 0.495 14.505 L 1.025 13.975 Z M 0.586 0.586 L 1.116 1.116 L 1.116 1.116 L 0.586 0.586 Z M 4 0 L 4 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 4 -0.75 L 4 0 Z M 12 0 L 12 0.75 C 12.964 0.75 13.612 0.752 14.095 0.817 C 14.556 0.879 14.754 0.986 14.884 1.116 L 15.414 0.586 L 15.945 0.055 C 15.489 -0.4 14.922 -0.586 14.294 -0.67 C 13.688 -0.752 12.922 -0.75 12 -0.75 L 12 0 Z M 15.414 0.586 L 14.884 1.116 C 15.014 1.246 15.121 1.444 15.183 1.905 C 15.248 2.388 15.25 3.036 15.25 4 L 16 4 L 16.75 4 C 16.75 3.078 16.752 2.312 16.67 1.706 C 16.586 1.078 16.4 0.511 15.945 0.055 L 15.414 0.586 Z M 16 4 L 15.25 4 L 15.25 8 L 16 8 L 16.75 8 L 16.75 4 L 16 4 Z M 16 8 L 15.25 8 C 15.25 9.671 15.248 10.849 15.129 11.74 C 15.012 12.61 14.795 13.095 14.445 13.445 L 14.975 13.975 L 15.505 14.505 C 16.18 13.83 16.476 12.977 16.615 11.94 C 16.752 10.926 16.75 9.629 16.75 8 L 16 8 Z M 14.975 13.975 L 14.445 13.445 C 14.095 13.795 13.61 14.012 12.74 14.129 C 11.849 14.248 10.671 14.25 9 14.25 L 9 15 L 9 15.75 C 10.629 15.75 11.926 15.752 12.94 15.615 C 13.977 15.476 14.83 15.18 15.505 14.505 L 14.975 13.975 Z M 9 15 L 9 14.25 L 7 14.25 L 7 15 L 7 15.75 L 9 15.75 L 9 15 Z M 7 15 L 7 14.25 C 5.329 14.25 4.151 14.248 3.259 14.129 C 2.39 14.012 1.905 13.795 1.555 13.445 L 1.025 13.975 L 0.495 14.505 C 1.17 15.18 2.023 15.476 3.06 15.615 C 4.074 15.752 5.371 15.75 7 15.75 L 7 15 Z M 1.025 13.975 L 1.555 13.445 C 1.205 13.095 0.988 12.61 0.871 11.74 C 0.752 10.849 0.75 9.671 0.75 8 L 0 8 L -0.75 8 C -0.75 9.629 -0.752 10.926 -0.615 11.94 C -0.476 12.977 -0.18 13.83 0.495 14.505 L 1.025 13.975 Z M 0 8 L 0.75 8 L 0.75 4 L 0 4 L -0.75 4 L -0.75 8 L 0 8 Z M 0 4 L 0.75 4 C 0.75 3.036 0.752 2.388 0.817 1.905 C 0.879 1.444 0.986 1.246 1.116 1.116 L 0.586 0.586 L 0.055 0.055 C -0.4 0.511 -0.586 1.078 -0.67 1.706 C -0.752 2.312 -0.75 3.078 -0.75 4 L 0 4 Z M 0.586 0.586 L 1.116 1.116 C 1.246 0.986 1.444 0.879 1.905 0.817 C 2.388 0.752 3.036 0.75 4 0.75 L 4 0 L 4 -0.75 C 3.078 -0.75 2.312 -0.752 1.706 -0.67 C 1.078 -0.586 0.511 -0.4 0.055 0.055 L 0.586 0.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7.500,
    viewBox: "0 0 8 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.25 7.5 C 7.25 7.914 7.586 8.25 8 8.25 C 8.414 8.25 8.75 7.914 8.75 7.5 L 8 7.5 L 7.25 7.5 Z M -0.75 7.5 C -0.75 7.914 -0.414 8.25 0 8.25 C 0.414 8.25 0.75 7.914 0.75 7.5 L 0 7.5 L -0.75 7.5 Z M 8 7.5 L 8.75 7.5 C 8.75 5.462 8.28 3.466 7.494 1.954 C 6.733 0.491 5.539 -0.75 4 -0.75 L 4 0 L 4 0.75 C 4.67 0.75 5.476 1.326 6.163 2.646 C 6.824 3.918 7.25 5.672 7.25 7.5 L 8 7.5 Z M 4 0 L 4 -0.75 C 2.461 -0.75 1.267 0.491 0.506 1.954 C -0.28 3.466 -0.75 5.462 -0.75 7.5 L 0 7.5 L 0.75 7.5 C 0.75 5.672 1.176 3.918 1.837 2.646 C 2.524 1.326 3.33 0.75 4 0.75 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 L 10.75 5 C 10.75 1.824 8.176 -0.75 5 -0.75 L 5 0 L 5 0.75 C 7.347 0.75 9.25 2.653 9.25 5 L 10 5 Z M 5 0 L 5 -0.75 C 1.824 -0.75 -0.75 1.824 -0.75 5 L 0 5 L 0.75 5 C 0.75 2.653 2.653 0.75 5 0.75 L 5 0 Z M 0 5 L -0.75 5 C -0.75 8.176 1.824 10.75 5 10.75 L 5 10 L 5 9.25 C 2.653 9.25 0.75 7.347 0.75 5 L 0 5 Z M 5 10 L 5 10.75 C 8.176 10.75 10.75 8.176 10.75 5 L 10 5 L 9.25 5 C 9.25 7.347 7.347 9.25 5 9.25 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 7,
    viewBox: "0 0 14 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 13.5,
      width: 14,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.25 7 C 13.25 7.414 13.586 7.75 14 7.75 C 14.414 7.75 14.75 7.414 14.75 7 L 14 7 L 13.25 7 Z M -0.75 7 C -0.75 7.414 -0.414 7.75 0 7.75 C 0.414 7.75 0.75 7.414 0.75 7 L 0 7 L -0.75 7 Z M 14 7 L 14.75 7 C 14.75 2.72 11.28 -0.75 7 -0.75 L 7 0 L 7 0.75 C 10.452 0.75 13.25 3.548 13.25 7 L 14 7 Z M 7 0 L 7 -0.75 C 2.72 -0.75 -0.75 2.72 -0.75 7 L 0 7 L 0.75 7 C 0.75 3.548 3.548 0.75 7 0.75 L 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1918,
      height: 119.093,
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 140px 20px 140px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-secondary-950)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1640,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    style: {
      position: "relative",
      width: 180,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-secondary-950)"
    },
    property1: "cs-logo-combi 1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Accueil")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "La Maison")), /*#__PURE__*/React.createElement(__ds_scope.Menu, {
    style: {
      position: "relative",
      width: 92,
      flexShrink: 0
    },
    text1: "Les Pièces",
    property1: "focus"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Passeport")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 17,
      top: 17,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 C 4.823 4.237 4.823 3.763 4.53 3.47 L 4 4 L 3.47 4.53 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 L 16.75 8 C 16.75 3.168 12.833 -0.75 8 -0.75 L 8 0 L 8 0.75 C 12.004 0.75 15.25 3.996 15.25 8 L 16 8 Z M 8 0 L 8 -0.75 C 3.168 -0.75 -0.75 3.168 -0.75 8 L 0 8 L 0.75 8 C 0.75 3.996 3.996 0.75 8 0.75 L 8 0 Z M 0 8 L -0.75 8 C -0.75 12.833 3.168 16.75 8 16.75 L 8 16 L 8 15.25 C 3.996 15.25 0.75 12.004 0.75 8 L 0 8 Z M 8 16 L 8 16.75 C 12.833 16.75 16.75 12.833 16.75 8 L 16 8 L 15.25 8 C 15.25 12.004 12.004 15.25 8 15.25 L 8 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 15,
    viewBox: "0 0 16 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7,
      width: 16,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.414 0.586 L 14.884 1.116 L 14.884 1.116 L 15.414 0.586 Z M 14.975 13.975 L 15.505 14.505 L 15.505 14.505 L 14.975 13.975 Z M 1.025 13.975 L 0.495 14.505 L 0.495 14.505 L 1.025 13.975 Z M 0.586 0.586 L 1.116 1.116 L 1.116 1.116 L 0.586 0.586 Z M 4 0 L 4 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 4 -0.75 L 4 0 Z M 12 0 L 12 0.75 C 12.964 0.75 13.612 0.752 14.095 0.817 C 14.556 0.879 14.754 0.986 14.884 1.116 L 15.414 0.586 L 15.945 0.055 C 15.489 -0.4 14.922 -0.586 14.294 -0.67 C 13.688 -0.752 12.922 -0.75 12 -0.75 L 12 0 Z M 15.414 0.586 L 14.884 1.116 C 15.014 1.246 15.121 1.444 15.183 1.905 C 15.248 2.388 15.25 3.036 15.25 4 L 16 4 L 16.75 4 C 16.75 3.078 16.752 2.312 16.67 1.706 C 16.586 1.078 16.4 0.511 15.945 0.055 L 15.414 0.586 Z M 16 4 L 15.25 4 L 15.25 8 L 16 8 L 16.75 8 L 16.75 4 L 16 4 Z M 16 8 L 15.25 8 C 15.25 9.671 15.248 10.849 15.129 11.74 C 15.012 12.61 14.795 13.095 14.445 13.445 L 14.975 13.975 L 15.505 14.505 C 16.18 13.83 16.476 12.977 16.615 11.94 C 16.752 10.926 16.75 9.629 16.75 8 L 16 8 Z M 14.975 13.975 L 14.445 13.445 C 14.095 13.795 13.61 14.012 12.74 14.129 C 11.849 14.248 10.671 14.25 9 14.25 L 9 15 L 9 15.75 C 10.629 15.75 11.926 15.752 12.94 15.615 C 13.977 15.476 14.83 15.18 15.505 14.505 L 14.975 13.975 Z M 9 15 L 9 14.25 L 7 14.25 L 7 15 L 7 15.75 L 9 15.75 L 9 15 Z M 7 15 L 7 14.25 C 5.329 14.25 4.151 14.248 3.259 14.129 C 2.39 14.012 1.905 13.795 1.555 13.445 L 1.025 13.975 L 0.495 14.505 C 1.17 15.18 2.023 15.476 3.06 15.615 C 4.074 15.752 5.371 15.75 7 15.75 L 7 15 Z M 1.025 13.975 L 1.555 13.445 C 1.205 13.095 0.988 12.61 0.871 11.74 C 0.752 10.849 0.75 9.671 0.75 8 L 0 8 L -0.75 8 C -0.75 9.629 -0.752 10.926 -0.615 11.94 C -0.476 12.977 -0.18 13.83 0.495 14.505 L 1.025 13.975 Z M 0 8 L 0.75 8 L 0.75 4 L 0 4 L -0.75 4 L -0.75 8 L 0 8 Z M 0 4 L 0.75 4 C 0.75 3.036 0.752 2.388 0.817 1.905 C 0.879 1.444 0.986 1.246 1.116 1.116 L 0.586 0.586 L 0.055 0.055 C -0.4 0.511 -0.586 1.078 -0.67 1.706 C -0.752 2.312 -0.75 3.078 -0.75 4 L 0 4 Z M 0.586 0.586 L 1.116 1.116 C 1.246 0.986 1.444 0.879 1.905 0.817 C 2.388 0.752 3.036 0.75 4 0.75 L 4 0 L 4 -0.75 C 3.078 -0.75 2.312 -0.752 1.706 -0.67 C 1.078 -0.586 0.511 -0.4 0.055 0.055 L 0.586 0.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7.500,
    viewBox: "0 0 8 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.25 7.5 C 7.25 7.914 7.586 8.25 8 8.25 C 8.414 8.25 8.75 7.914 8.75 7.5 L 8 7.5 L 7.25 7.5 Z M -0.75 7.5 C -0.75 7.914 -0.414 8.25 0 8.25 C 0.414 8.25 0.75 7.914 0.75 7.5 L 0 7.5 L -0.75 7.5 Z M 8 7.5 L 8.75 7.5 C 8.75 5.462 8.28 3.466 7.494 1.954 C 6.733 0.491 5.539 -0.75 4 -0.75 L 4 0 L 4 0.75 C 4.67 0.75 5.476 1.326 6.163 2.646 C 6.824 3.918 7.25 5.672 7.25 7.5 L 8 7.5 Z M 4 0 L 4 -0.75 C 2.461 -0.75 1.267 0.491 0.506 1.954 C -0.28 3.466 -0.75 5.462 -0.75 7.5 L 0 7.5 L 0.75 7.5 C 0.75 5.672 1.176 3.918 1.837 2.646 C 2.524 1.326 3.33 0.75 4 0.75 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 L 10.75 5 C 10.75 1.824 8.176 -0.75 5 -0.75 L 5 0 L 5 0.75 C 7.347 0.75 9.25 2.653 9.25 5 L 10 5 Z M 5 0 L 5 -0.75 C 1.824 -0.75 -0.75 1.824 -0.75 5 L 0 5 L 0.75 5 C 0.75 2.653 2.653 0.75 5 0.75 L 5 0 Z M 0 5 L -0.75 5 C -0.75 8.176 1.824 10.75 5 10.75 L 5 10 L 5 9.25 C 2.653 9.25 0.75 7.347 0.75 5 L 0 5 Z M 5 10 L 5 10.75 C 8.176 10.75 10.75 8.176 10.75 5 L 10 5 L 9.25 5 C 9.25 7.347 7.347 9.25 5 9.25 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 7,
    viewBox: "0 0 14 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 13.5,
      width: 14,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.25 7 C 13.25 7.414 13.586 7.75 14 7.75 C 14.414 7.75 14.75 7.414 14.75 7 L 14 7 L 13.25 7 Z M -0.75 7 C -0.75 7.414 -0.414 7.75 0 7.75 C 0.414 7.75 0.75 7.414 0.75 7 L 0 7 L -0.75 7 Z M 14 7 L 14.75 7 C 14.75 2.72 11.28 -0.75 7 -0.75 L 7 0 L 7 0.75 C 10.452 0.75 13.25 3.548 13.25 7 L 14 7 Z M 7 0 L 7 -0.75 C 2.72 -0.75 -0.75 2.72 -0.75 7 L 0 7 L 0.75 7 C 0.75 3.548 3.548 0.75 7 0.75 L 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1918,
      height: 119.093,
      display: "flex",
      flexDirection: "row",
      padding: "20px 140px 20px 140px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1640,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    style: {
      position: "relative",
      width: 180,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "rgb(255,255,255)"
    },
    property1: "cs-logo-combi 1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Accueil")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "La Maison")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Les Pi\xE8ces")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Passeport")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 17,
      top: 17,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 C 4.823 4.237 4.823 3.763 4.53 3.47 L 4 4 L 3.47 4.53 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 L 16.75 8 C 16.75 3.168 12.833 -0.75 8 -0.75 L 8 0 L 8 0.75 C 12.004 0.75 15.25 3.996 15.25 8 L 16 8 Z M 8 0 L 8 -0.75 C 3.168 -0.75 -0.75 3.168 -0.75 8 L 0 8 L 0.75 8 C 0.75 3.996 3.996 0.75 8 0.75 L 8 0 Z M 0 8 L -0.75 8 C -0.75 12.833 3.168 16.75 8 16.75 L 8 16 L 8 15.25 C 3.996 15.25 0.75 12.004 0.75 8 L 0 8 Z M 8 16 L 8 16.75 C 12.833 16.75 16.75 12.833 16.75 8 L 16 8 L 15.25 8 C 15.25 12.004 12.004 15.25 8 15.25 L 8 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 15,
    viewBox: "0 0 16 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7,
      width: 16,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.414 0.586 L 14.884 1.116 L 14.884 1.116 L 15.414 0.586 Z M 14.975 13.975 L 15.505 14.505 L 15.505 14.505 L 14.975 13.975 Z M 1.025 13.975 L 0.495 14.505 L 0.495 14.505 L 1.025 13.975 Z M 0.586 0.586 L 1.116 1.116 L 1.116 1.116 L 0.586 0.586 Z M 4 0 L 4 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 4 -0.75 L 4 0 Z M 12 0 L 12 0.75 C 12.964 0.75 13.612 0.752 14.095 0.817 C 14.556 0.879 14.754 0.986 14.884 1.116 L 15.414 0.586 L 15.945 0.055 C 15.489 -0.4 14.922 -0.586 14.294 -0.67 C 13.688 -0.752 12.922 -0.75 12 -0.75 L 12 0 Z M 15.414 0.586 L 14.884 1.116 C 15.014 1.246 15.121 1.444 15.183 1.905 C 15.248 2.388 15.25 3.036 15.25 4 L 16 4 L 16.75 4 C 16.75 3.078 16.752 2.312 16.67 1.706 C 16.586 1.078 16.4 0.511 15.945 0.055 L 15.414 0.586 Z M 16 4 L 15.25 4 L 15.25 8 L 16 8 L 16.75 8 L 16.75 4 L 16 4 Z M 16 8 L 15.25 8 C 15.25 9.671 15.248 10.849 15.129 11.74 C 15.012 12.61 14.795 13.095 14.445 13.445 L 14.975 13.975 L 15.505 14.505 C 16.18 13.83 16.476 12.977 16.615 11.94 C 16.752 10.926 16.75 9.629 16.75 8 L 16 8 Z M 14.975 13.975 L 14.445 13.445 C 14.095 13.795 13.61 14.012 12.74 14.129 C 11.849 14.248 10.671 14.25 9 14.25 L 9 15 L 9 15.75 C 10.629 15.75 11.926 15.752 12.94 15.615 C 13.977 15.476 14.83 15.18 15.505 14.505 L 14.975 13.975 Z M 9 15 L 9 14.25 L 7 14.25 L 7 15 L 7 15.75 L 9 15.75 L 9 15 Z M 7 15 L 7 14.25 C 5.329 14.25 4.151 14.248 3.259 14.129 C 2.39 14.012 1.905 13.795 1.555 13.445 L 1.025 13.975 L 0.495 14.505 C 1.17 15.18 2.023 15.476 3.06 15.615 C 4.074 15.752 5.371 15.75 7 15.75 L 7 15 Z M 1.025 13.975 L 1.555 13.445 C 1.205 13.095 0.988 12.61 0.871 11.74 C 0.752 10.849 0.75 9.671 0.75 8 L 0 8 L -0.75 8 C -0.75 9.629 -0.752 10.926 -0.615 11.94 C -0.476 12.977 -0.18 13.83 0.495 14.505 L 1.025 13.975 Z M 0 8 L 0.75 8 L 0.75 4 L 0 4 L -0.75 4 L -0.75 8 L 0 8 Z M 0 4 L 0.75 4 C 0.75 3.036 0.752 2.388 0.817 1.905 C 0.879 1.444 0.986 1.246 1.116 1.116 L 0.586 0.586 L 0.055 0.055 C -0.4 0.511 -0.586 1.078 -0.67 1.706 C -0.752 2.312 -0.75 3.078 -0.75 4 L 0 4 Z M 0.586 0.586 L 1.116 1.116 C 1.246 0.986 1.444 0.879 1.905 0.817 C 2.388 0.752 3.036 0.75 4 0.75 L 4 0 L 4 -0.75 C 3.078 -0.75 2.312 -0.752 1.706 -0.67 C 1.078 -0.586 0.511 -0.4 0.055 0.055 L 0.586 0.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7.500,
    viewBox: "0 0 8 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.25 7.5 C 7.25 7.914 7.586 8.25 8 8.25 C 8.414 8.25 8.75 7.914 8.75 7.5 L 8 7.5 L 7.25 7.5 Z M -0.75 7.5 C -0.75 7.914 -0.414 8.25 0 8.25 C 0.414 8.25 0.75 7.914 0.75 7.5 L 0 7.5 L -0.75 7.5 Z M 8 7.5 L 8.75 7.5 C 8.75 5.462 8.28 3.466 7.494 1.954 C 6.733 0.491 5.539 -0.75 4 -0.75 L 4 0 L 4 0.75 C 4.67 0.75 5.476 1.326 6.163 2.646 C 6.824 3.918 7.25 5.672 7.25 7.5 L 8 7.5 Z M 4 0 L 4 -0.75 C 2.461 -0.75 1.267 0.491 0.506 1.954 C -0.28 3.466 -0.75 5.462 -0.75 7.5 L 0 7.5 L 0.75 7.5 C 0.75 5.672 1.176 3.918 1.837 2.646 C 2.524 1.326 3.33 0.75 4 0.75 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 L 10.75 5 C 10.75 1.824 8.176 -0.75 5 -0.75 L 5 0 L 5 0.75 C 7.347 0.75 9.25 2.653 9.25 5 L 10 5 Z M 5 0 L 5 -0.75 C 1.824 -0.75 -0.75 1.824 -0.75 5 L 0 5 L 0.75 5 C 0.75 2.653 2.653 0.75 5 0.75 L 5 0 Z M 0 5 L -0.75 5 C -0.75 8.176 1.824 10.75 5 10.75 L 5 10 L 5 9.25 C 2.653 9.25 0.75 7.347 0.75 5 L 0 5 Z M 5 10 L 5 10.75 C 8.176 10.75 10.75 8.176 10.75 5 L 10 5 L 9.25 5 C 9.25 7.347 7.347 9.25 5 9.25 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 7,
    viewBox: "0 0 14 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 13.5,
      width: 14,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.25 7 C 13.25 7.414 13.586 7.75 14 7.75 C 14.414 7.75 14.75 7.414 14.75 7 L 14 7 L 13.25 7 Z M -0.75 7 C -0.75 7.414 -0.414 7.75 0 7.75 C 0.414 7.75 0.75 7.414 0.75 7 L 0 7 L -0.75 7 Z M 14 7 L 14.75 7 C 14.75 2.72 11.28 -0.75 7 -0.75 L 7 0 L 7 0.75 C 10.452 0.75 13.25 3.548 13.25 7 L 14 7 Z M 7 0 L 7 -0.75 C 2.72 -0.75 -0.75 2.72 -0.75 7 L 0 7 L 0.75 7 C 0.75 3.548 3.548 0.75 7 0.75 L 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Mon profil")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1918,
      height: 119.093,
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(40px)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 140px 20px 140px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-secondary-950)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1640,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    style: {
      position: "relative",
      width: 180,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto",
      color: "var(--color-secondary-950)"
    },
    property1: "cs-logo-combi 1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Accueil")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "La Maison")), /*#__PURE__*/React.createElement(__ds_scope.Menu, {
    style: {
      position: "relative",
      width: 92,
      flexShrink: 0
    },
    text1: "Les Pièces",
    property1: "focus"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Passeport")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 17,
      top: 17,
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 C 4.823 4.237 4.823 3.763 4.53 3.47 L 4 4 L 3.47 4.53 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 8 L 16.75 8 C 16.75 3.168 12.833 -0.75 8 -0.75 L 8 0 L 8 0.75 C 12.004 0.75 15.25 3.996 15.25 8 L 16 8 Z M 8 0 L 8 -0.75 C 3.168 -0.75 -0.75 3.168 -0.75 8 L 0 8 L 0.75 8 C 0.75 3.996 3.996 0.75 8 0.75 L 8 0 Z M 0 8 L -0.75 8 C -0.75 12.833 3.168 16.75 8 16.75 L 8 16 L 8 15.25 C 3.996 15.25 0.75 12.004 0.75 8 L 0 8 Z M 8 16 L 8 16.75 C 12.833 16.75 16.75 12.833 16.75 8 L 16 8 L 15.25 8 C 15.25 12.004 12.004 15.25 8 15.25 L 8 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 15,
    viewBox: "0 0 16 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7,
      width: 16,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.414 0.586 L 14.884 1.116 L 14.884 1.116 L 15.414 0.586 Z M 14.975 13.975 L 15.505 14.505 L 15.505 14.505 L 14.975 13.975 Z M 1.025 13.975 L 0.495 14.505 L 0.495 14.505 L 1.025 13.975 Z M 0.586 0.586 L 1.116 1.116 L 1.116 1.116 L 0.586 0.586 Z M 4 0 L 4 0.75 L 12 0.75 L 12 0 L 12 -0.75 L 4 -0.75 L 4 0 Z M 12 0 L 12 0.75 C 12.964 0.75 13.612 0.752 14.095 0.817 C 14.556 0.879 14.754 0.986 14.884 1.116 L 15.414 0.586 L 15.945 0.055 C 15.489 -0.4 14.922 -0.586 14.294 -0.67 C 13.688 -0.752 12.922 -0.75 12 -0.75 L 12 0 Z M 15.414 0.586 L 14.884 1.116 C 15.014 1.246 15.121 1.444 15.183 1.905 C 15.248 2.388 15.25 3.036 15.25 4 L 16 4 L 16.75 4 C 16.75 3.078 16.752 2.312 16.67 1.706 C 16.586 1.078 16.4 0.511 15.945 0.055 L 15.414 0.586 Z M 16 4 L 15.25 4 L 15.25 8 L 16 8 L 16.75 8 L 16.75 4 L 16 4 Z M 16 8 L 15.25 8 C 15.25 9.671 15.248 10.849 15.129 11.74 C 15.012 12.61 14.795 13.095 14.445 13.445 L 14.975 13.975 L 15.505 14.505 C 16.18 13.83 16.476 12.977 16.615 11.94 C 16.752 10.926 16.75 9.629 16.75 8 L 16 8 Z M 14.975 13.975 L 14.445 13.445 C 14.095 13.795 13.61 14.012 12.74 14.129 C 11.849 14.248 10.671 14.25 9 14.25 L 9 15 L 9 15.75 C 10.629 15.75 11.926 15.752 12.94 15.615 C 13.977 15.476 14.83 15.18 15.505 14.505 L 14.975 13.975 Z M 9 15 L 9 14.25 L 7 14.25 L 7 15 L 7 15.75 L 9 15.75 L 9 15 Z M 7 15 L 7 14.25 C 5.329 14.25 4.151 14.248 3.259 14.129 C 2.39 14.012 1.905 13.795 1.555 13.445 L 1.025 13.975 L 0.495 14.505 C 1.17 15.18 2.023 15.476 3.06 15.615 C 4.074 15.752 5.371 15.75 7 15.75 L 7 15 Z M 1.025 13.975 L 1.555 13.445 C 1.205 13.095 0.988 12.61 0.871 11.74 C 0.752 10.849 0.75 9.671 0.75 8 L 0 8 L -0.75 8 C -0.75 9.629 -0.752 10.926 -0.615 11.94 C -0.476 12.977 -0.18 13.83 0.495 14.505 L 1.025 13.975 Z M 0 8 L 0.75 8 L 0.75 4 L 0 4 L -0.75 4 L -0.75 8 L 0 8 Z M 0 4 L 0.75 4 C 0.75 3.036 0.752 2.388 0.817 1.905 C 0.879 1.444 0.986 1.246 1.116 1.116 L 0.586 0.586 L 0.055 0.055 C -0.4 0.511 -0.586 1.078 -0.67 1.706 C -0.752 2.312 -0.75 3.078 -0.75 4 L 0 4 Z M 0.586 0.586 L 1.116 1.116 C 1.246 0.986 1.444 0.879 1.905 0.817 C 2.388 0.752 3.036 0.75 4 0.75 L 4 0 L 4 -0.75 C 3.078 -0.75 2.312 -0.752 1.706 -0.67 C 1.078 -0.586 0.511 -0.4 0.055 0.055 L 0.586 0.586 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 7.500,
    viewBox: "0 0 8 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 2,
      width: 8,
      height: 7.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.25 7.5 C 7.25 7.914 7.586 8.25 8 8.25 C 8.414 8.25 8.75 7.914 8.75 7.5 L 8 7.5 L 7.25 7.5 Z M -0.75 7.5 C -0.75 7.914 -0.414 8.25 0 8.25 C 0.414 8.25 0.75 7.914 0.75 7.5 L 0 7.5 L -0.75 7.5 Z M 8 7.5 L 8.75 7.5 C 8.75 5.462 8.28 3.466 7.494 1.954 C 6.733 0.491 5.539 -0.75 4 -0.75 L 4 0 L 4 0.75 C 4.67 0.75 5.476 1.326 6.163 2.646 C 6.824 3.918 7.25 5.672 7.25 7.5 L 8 7.5 Z M 4 0 L 4 -0.75 C 2.461 -0.75 1.267 0.491 0.506 1.954 C -0.28 3.466 -0.75 5.462 -0.75 7.5 L 0 7.5 L 0.75 7.5 C 0.75 5.672 1.176 3.918 1.837 2.646 C 2.524 1.326 3.33 0.75 4 0.75 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.5,
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 5 L 10.75 5 C 10.75 1.824 8.176 -0.75 5 -0.75 L 5 0 L 5 0.75 C 7.347 0.75 9.25 2.653 9.25 5 L 10 5 Z M 5 0 L 5 -0.75 C 1.824 -0.75 -0.75 1.824 -0.75 5 L 0 5 L 0.75 5 C 0.75 2.653 2.653 0.75 5 0.75 L 5 0 Z M 0 5 L -0.75 5 C -0.75 8.176 1.824 10.75 5 10.75 L 5 10 L 5 9.25 C 2.653 9.25 0.75 7.347 0.75 5 L 0 5 Z M 5 10 L 5 10.75 C 8.176 10.75 10.75 8.176 10.75 5 L 10 5 L 9.25 5 C 9.25 7.347 7.347 9.25 5 9.25 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 7,
    viewBox: "0 0 14 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 13.5,
      width: 14,
      height: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.25 7 C 13.25 7.414 13.586 7.75 14 7.75 C 14.414 7.75 14.75 7.414 14.75 7 L 14 7 L 13.25 7 Z M -0.75 7 C -0.75 7.414 -0.414 7.75 0 7.75 C 0.414 7.75 0.75 7.414 0.75 7 L 0 7 L -0.75 7 Z M 14 7 L 14.75 7 C 14.75 2.72 11.28 -0.75 7 -0.75 L 7 0 L 7 0.75 C 10.452 0.75 13.25 3.548 13.25 7 L 14 7 Z M 7 0 L 7 -0.75 C 2.72 -0.75 -0.75 2.72 -0.75 7 L 0 7 L 0.75 7 C 0.75 3.548 3.548 0.75 7 0.75 L 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, props.text1 ?? "Mon profil")))));
  const __impls = {
    // figma: Property 1=navbar default
    "property1=navbar default": __body0,
    // figma: Property 1=navbar clair
    "property1=navbar clair": __body1,
    // figma: Property 1=connecte black
    "property1=connecte black": __body2,
    // figma: Property 1=connecte
    "property1=connecte": __body3
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { Navbar, __ds_default_components_Navbar_151eluc: Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/RecapCommande.jsx
try { (() => {
// figma node: 179:1455 recap commande
function RecapCommande(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--color-secondary-50)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, props.text1 ?? "Récapitulatif de la commande"), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 519 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 0.998 0 L 0.998 -0.5 L 0.998 -1 L 0 -1 L 0 -0.5 Z M 2.994 -0.5 L 2.994 0 L 4.99 0 L 4.99 -0.5 L 4.99 -1 L 2.994 -1 L 2.994 -0.5 Z M 6.987 -0.5 L 6.987 0 L 8.983 0 L 8.983 -0.5 L 8.983 -1 L 6.987 -1 L 6.987 -0.5 Z M 10.979 -0.5 L 10.979 0 L 12.975 0 L 12.975 -0.5 L 12.975 -1 L 10.979 -1 L 10.979 -0.5 Z M 14.971 -0.5 L 14.971 0 L 16.967 0 L 16.967 -0.5 L 16.967 -1 L 14.971 -1 L 14.971 -0.5 Z M 18.963 -0.5 L 18.963 0 L 20.96 0 L 20.96 -0.5 L 20.96 -1 L 18.963 -1 L 18.963 -0.5 Z M 22.956 -0.5 L 22.956 0 L 24.952 0 L 24.952 -0.5 L 24.952 -1 L 22.956 -1 L 22.956 -0.5 Z M 26.948 -0.5 L 26.948 0 L 28.944 0 L 28.944 -0.5 L 28.944 -1 L 26.948 -1 L 26.948 -0.5 Z M 30.94 -0.5 L 30.94 0 L 32.937 0 L 32.937 -0.5 L 32.937 -1 L 30.94 -1 L 30.94 -0.5 Z M 34.933 -0.5 L 34.933 0 L 36.929 0 L 36.929 -0.5 L 36.929 -1 L 34.933 -1 L 34.933 -0.5 Z M 38.925 -0.5 L 38.925 0 L 40.921 0 L 40.921 -0.5 L 40.921 -1 L 38.925 -1 L 38.925 -0.5 Z M 42.917 -0.5 L 42.917 0 L 44.913 0 L 44.913 -0.5 L 44.913 -1 L 42.917 -1 L 42.917 -0.5 Z M 46.91 -0.5 L 46.91 0 L 48.906 0 L 48.906 -0.5 L 48.906 -1 L 46.91 -1 L 46.91 -0.5 Z M 50.902 -0.5 L 50.902 0 L 52.898 0 L 52.898 -0.5 L 52.898 -1 L 50.902 -1 L 50.902 -0.5 Z M 54.894 -0.5 L 54.894 0 L 56.89 0 L 56.89 -0.5 L 56.89 -1 L 54.894 -1 L 54.894 -0.5 Z M 58.887 -0.5 L 58.887 0 L 60.883 0 L 60.883 -0.5 L 60.883 -1 L 58.887 -1 L 58.887 -0.5 Z M 62.879 -0.5 L 62.879 0 L 64.875 0 L 64.875 -0.5 L 64.875 -1 L 62.879 -1 L 62.879 -0.5 Z M 66.871 -0.5 L 66.871 0 L 68.867 0 L 68.867 -0.5 L 68.867 -1 L 66.871 -1 L 66.871 -0.5 Z M 70.863 -0.5 L 70.863 0 L 72.86 0 L 72.86 -0.5 L 72.86 -1 L 70.863 -1 L 70.863 -0.5 Z M 74.856 -0.5 L 74.856 0 L 76.852 0 L 76.852 -0.5 L 76.852 -1 L 74.856 -1 L 74.856 -0.5 Z M 78.848 -0.5 L 78.848 0 L 80.844 0 L 80.844 -0.5 L 80.844 -1 L 78.848 -1 L 78.848 -0.5 Z M 82.84 -0.5 L 82.84 0 L 84.837 0 L 84.837 -0.5 L 84.837 -1 L 82.84 -1 L 82.84 -0.5 Z M 86.833 -0.5 L 86.833 0 L 88.829 0 L 88.829 -0.5 L 88.829 -1 L 86.833 -1 L 86.833 -0.5 Z M 90.825 -0.5 L 90.825 0 L 92.821 0 L 92.821 -0.5 L 92.821 -1 L 90.825 -1 L 90.825 -0.5 Z M 94.817 -0.5 L 94.817 0 L 96.813 0 L 96.813 -0.5 L 96.813 -1 L 94.817 -1 L 94.817 -0.5 Z M 98.81 -0.5 L 98.81 0 L 100.806 0 L 100.806 -0.5 L 100.806 -1 L 98.81 -1 L 98.81 -0.5 Z M 102.802 -0.5 L 102.802 0 L 104.798 0 L 104.798 -0.5 L 104.798 -1 L 102.802 -1 L 102.802 -0.5 Z M 106.794 -0.5 L 106.794 0 L 108.79 0 L 108.79 -0.5 L 108.79 -1 L 106.794 -1 L 106.794 -0.5 Z M 110.787 -0.5 L 110.787 0 L 112.783 0 L 112.783 -0.5 L 112.783 -1 L 110.787 -1 L 110.787 -0.5 Z M 114.779 -0.5 L 114.779 0 L 116.775 0 L 116.775 -0.5 L 116.775 -1 L 114.779 -1 L 114.779 -0.5 Z M 118.771 -0.5 L 118.771 0 L 120.767 0 L 120.767 -0.5 L 120.767 -1 L 118.771 -1 L 118.771 -0.5 Z M 122.764 -0.5 L 122.764 0 L 124.76 0 L 124.76 -0.5 L 124.76 -1 L 122.764 -1 L 122.764 -0.5 Z M 126.756 -0.5 L 126.756 0 L 128.752 0 L 128.752 -0.5 L 128.752 -1 L 126.756 -1 L 126.756 -0.5 Z M 130.748 -0.5 L 130.748 0 L 132.744 0 L 132.744 -0.5 L 132.744 -1 L 130.748 -1 L 130.748 -0.5 Z M 134.74 -0.5 L 134.74 0 L 136.737 0 L 136.737 -0.5 L 136.737 -1 L 134.74 -1 L 134.74 -0.5 Z M 138.733 -0.5 L 138.733 0 L 140.729 0 L 140.729 -0.5 L 140.729 -1 L 138.733 -1 L 138.733 -0.5 Z M 142.725 -0.5 L 142.725 0 L 144.721 0 L 144.721 -0.5 L 144.721 -1 L 142.725 -1 L 142.725 -0.5 Z M 146.717 -0.5 L 146.717 0 L 148.714 0 L 148.714 -0.5 L 148.714 -1 L 146.717 -1 L 146.717 -0.5 Z M 150.71 -0.5 L 150.71 0 L 152.706 0 L 152.706 -0.5 L 152.706 -1 L 150.71 -1 L 150.71 -0.5 Z M 154.702 -0.5 L 154.702 0 L 156.698 0 L 156.698 -0.5 L 156.698 -1 L 154.702 -1 L 154.702 -0.5 Z M 158.694 -0.5 L 158.694 0 L 160.69 0 L 160.69 -0.5 L 160.69 -1 L 158.694 -1 L 158.694 -0.5 Z M 162.687 -0.5 L 162.687 0 L 164.683 0 L 164.683 -0.5 L 164.683 -1 L 162.687 -1 L 162.687 -0.5 Z M 166.679 -0.5 L 166.679 0 L 168.675 0 L 168.675 -0.5 L 168.675 -1 L 166.679 -1 L 166.679 -0.5 Z M 170.671 -0.5 L 170.671 0 L 172.667 0 L 172.667 -0.5 L 172.667 -1 L 170.671 -1 L 170.671 -0.5 Z M 174.664 -0.5 L 174.664 0 L 176.66 0 L 176.66 -0.5 L 176.66 -1 L 174.664 -1 L 174.664 -0.5 Z M 178.656 -0.5 L 178.656 0 L 180.652 0 L 180.652 -0.5 L 180.652 -1 L 178.656 -1 L 178.656 -0.5 Z M 182.648 -0.5 L 182.648 0 L 184.644 0 L 184.644 -0.5 L 184.644 -1 L 182.648 -1 L 182.648 -0.5 Z M 186.64 -0.5 L 186.64 0 L 188.637 0 L 188.637 -0.5 L 188.637 -1 L 186.64 -1 L 186.64 -0.5 Z M 190.633 -0.5 L 190.633 0 L 192.629 0 L 192.629 -0.5 L 192.629 -1 L 190.633 -1 L 190.633 -0.5 Z M 194.625 -0.5 L 194.625 0 L 196.621 0 L 196.621 -0.5 L 196.621 -1 L 194.625 -1 L 194.625 -0.5 Z M 198.617 -0.5 L 198.617 0 L 200.614 0 L 200.614 -0.5 L 200.614 -1 L 198.617 -1 L 198.617 -0.5 Z M 202.61 -0.5 L 202.61 0 L 204.606 0 L 204.606 -0.5 L 204.606 -1 L 202.61 -1 L 202.61 -0.5 Z M 206.602 -0.5 L 206.602 0 L 208.598 0 L 208.598 -0.5 L 208.598 -1 L 206.602 -1 L 206.602 -0.5 Z M 210.594 -0.5 L 210.594 0 L 212.59 0 L 212.59 -0.5 L 212.59 -1 L 210.594 -1 L 210.594 -0.5 Z M 214.587 -0.5 L 214.587 0 L 216.583 0 L 216.583 -0.5 L 216.583 -1 L 214.587 -1 L 214.587 -0.5 Z M 218.579 -0.5 L 218.579 0 L 220.575 0 L 220.575 -0.5 L 220.575 -1 L 218.579 -1 L 218.579 -0.5 Z M 222.571 -0.5 L 222.571 0 L 224.567 0 L 224.567 -0.5 L 224.567 -1 L 222.571 -1 L 222.571 -0.5 Z M 226.564 -0.5 L 226.564 0 L 228.56 0 L 228.56 -0.5 L 228.56 -1 L 226.564 -1 L 226.564 -0.5 Z M 230.556 -0.5 L 230.556 0 L 232.552 0 L 232.552 -0.5 L 232.552 -1 L 230.556 -1 L 230.556 -0.5 Z M 234.548 -0.5 L 234.548 0 L 236.544 0 L 236.544 -0.5 L 236.544 -1 L 234.548 -1 L 234.548 -0.5 Z M 238.54 -0.5 L 238.54 0 L 240.537 0 L 240.537 -0.5 L 240.537 -1 L 238.54 -1 L 238.54 -0.5 Z M 242.533 -0.5 L 242.533 0 L 244.529 0 L 244.529 -0.5 L 244.529 -1 L 242.533 -1 L 242.533 -0.5 Z M 246.525 -0.5 L 246.525 0 L 248.521 0 L 248.521 -0.5 L 248.521 -1 L 246.525 -1 L 246.525 -0.5 Z M 250.517 -0.5 L 250.517 0 L 252.514 0 L 252.514 -0.5 L 252.514 -1 L 250.517 -1 L 250.517 -0.5 Z M 254.51 -0.5 L 254.51 0 L 256.506 0 L 256.506 -0.5 L 256.506 -1 L 254.51 -1 L 254.51 -0.5 Z M 258.502 -0.5 L 258.502 0 L 260.498 0 L 260.498 -0.5 L 260.498 -1 L 258.502 -1 L 258.502 -0.5 Z M 262.494 -0.5 L 262.494 0 L 264.49 0 L 264.49 -0.5 L 264.49 -1 L 262.494 -1 L 262.494 -0.5 Z M 266.487 -0.5 L 266.487 0 L 268.483 0 L 268.483 -0.5 L 268.483 -1 L 266.487 -1 L 266.487 -0.5 Z M 270.479 -0.5 L 270.479 0 L 272.475 0 L 272.475 -0.5 L 272.475 -1 L 270.479 -1 L 270.479 -0.5 Z M 274.471 -0.5 L 274.471 0 L 276.467 0 L 276.467 -0.5 L 276.467 -1 L 274.471 -1 L 274.471 -0.5 Z M 278.464 -0.5 L 278.464 0 L 280.46 0 L 280.46 -0.5 L 280.46 -1 L 278.464 -1 L 278.464 -0.5 Z M 282.456 -0.5 L 282.456 0 L 284.452 0 L 284.452 -0.5 L 284.452 -1 L 282.456 -1 L 282.456 -0.5 Z M 286.448 -0.5 L 286.448 0 L 288.444 0 L 288.444 -0.5 L 288.444 -1 L 286.448 -1 L 286.448 -0.5 Z M 290.44 -0.5 L 290.44 0 L 292.437 0 L 292.437 -0.5 L 292.437 -1 L 290.44 -1 L 290.44 -0.5 Z M 294.433 -0.5 L 294.433 0 L 296.429 0 L 296.429 -0.5 L 296.429 -1 L 294.433 -1 L 294.433 -0.5 Z M 298.425 -0.5 L 298.425 0 L 300.421 0 L 300.421 -0.5 L 300.421 -1 L 298.425 -1 L 298.425 -0.5 Z M 302.417 -0.5 L 302.417 0 L 304.414 0 L 304.414 -0.5 L 304.414 -1 L 302.417 -1 L 302.417 -0.5 Z M 306.41 -0.5 L 306.41 0 L 308.406 0 L 308.406 -0.5 L 308.406 -1 L 306.41 -1 L 306.41 -0.5 Z M 310.402 -0.5 L 310.402 0 L 312.398 0 L 312.398 -0.5 L 312.398 -1 L 310.402 -1 L 310.402 -0.5 Z M 314.394 -0.5 L 314.394 0 L 316.391 0 L 316.391 -0.5 L 316.391 -1 L 314.394 -1 L 314.394 -0.5 Z M 318.387 -0.5 L 318.387 0 L 320.383 0 L 320.383 -0.5 L 320.383 -1 L 318.387 -1 L 318.387 -0.5 Z M 322.379 -0.5 L 322.379 0 L 324.375 0 L 324.375 -0.5 L 324.375 -1 L 322.379 -1 L 322.379 -0.5 Z M 326.371 -0.5 L 326.371 0 L 328.367 0 L 328.367 -0.5 L 328.367 -1 L 326.371 -1 L 326.371 -0.5 Z M 330.364 -0.5 L 330.364 0 L 332.36 0 L 332.36 -0.5 L 332.36 -1 L 330.364 -1 L 330.364 -0.5 Z M 334.356 -0.5 L 334.356 0 L 336.352 0 L 336.352 -0.5 L 336.352 -1 L 334.356 -1 L 334.356 -0.5 Z M 338.348 -0.5 L 338.348 0 L 340.344 0 L 340.344 -0.5 L 340.344 -1 L 338.348 -1 L 338.348 -0.5 Z M 342.341 -0.5 L 342.341 0 L 344.337 0 L 344.337 -0.5 L 344.337 -1 L 342.341 -1 L 342.341 -0.5 Z M 346.333 -0.5 L 346.333 0 L 348.329 0 L 348.329 -0.5 L 348.329 -1 L 346.333 -1 L 346.333 -0.5 Z M 350.325 -0.5 L 350.325 0 L 352.321 0 L 352.321 -0.5 L 352.321 -1 L 350.325 -1 L 350.325 -0.5 Z M 354.317 -0.5 L 354.317 0 L 356.314 0 L 356.314 -0.5 L 356.314 -1 L 354.317 -1 L 354.317 -0.5 Z M 358.31 -0.5 L 358.31 0 L 360.306 0 L 360.306 -0.5 L 360.306 -1 L 358.31 -1 L 358.31 -0.5 Z M 362.302 -0.5 L 362.302 0 L 364.298 0 L 364.298 -0.5 L 364.298 -1 L 362.302 -1 L 362.302 -0.5 Z M 366.294 -0.5 L 366.294 0 L 368.291 0 L 368.291 -0.5 L 368.291 -1 L 366.294 -1 L 366.294 -0.5 Z M 370.287 -0.5 L 370.287 0 L 372.283 0 L 372.283 -0.5 L 372.283 -1 L 370.287 -1 L 370.287 -0.5 Z M 374.279 -0.5 L 374.279 0 L 376.275 0 L 376.275 -0.5 L 376.275 -1 L 374.279 -1 L 374.279 -0.5 Z M 378.271 -0.5 L 378.271 0 L 380.267 0 L 380.267 -0.5 L 380.267 -1 L 378.271 -1 L 378.271 -0.5 Z M 382.264 -0.5 L 382.264 0 L 384.26 0 L 384.26 -0.5 L 384.26 -1 L 382.264 -1 L 382.264 -0.5 Z M 386.256 -0.5 L 386.256 0 L 388.252 0 L 388.252 -0.5 L 388.252 -1 L 386.256 -1 L 386.256 -0.5 Z M 390.248 -0.5 L 390.248 0 L 392.244 0 L 392.244 -0.5 L 392.244 -1 L 390.248 -1 L 390.248 -0.5 Z M 394.241 -0.5 L 394.241 0 L 396.237 0 L 396.237 -0.5 L 396.237 -1 L 394.241 -1 L 394.241 -0.5 Z M 398.233 -0.5 L 398.233 0 L 400.229 0 L 400.229 -0.5 L 400.229 -1 L 398.233 -1 L 398.233 -0.5 Z M 402.225 -0.5 L 402.225 0 L 404.221 0 L 404.221 -0.5 L 404.221 -1 L 402.225 -1 L 402.225 -0.5 Z M 406.217 -0.5 L 406.217 0 L 408.214 0 L 408.214 -0.5 L 408.214 -1 L 406.217 -1 L 406.217 -0.5 Z M 410.21 -0.5 L 410.21 0 L 412.206 0 L 412.206 -0.5 L 412.206 -1 L 410.21 -1 L 410.21 -0.5 Z M 414.202 -0.5 L 414.202 0 L 416.198 0 L 416.198 -0.5 L 416.198 -1 L 414.202 -1 L 414.202 -0.5 Z M 418.194 -0.5 L 418.194 0 L 420.191 0 L 420.191 -0.5 L 420.191 -1 L 418.194 -1 L 418.194 -0.5 Z M 422.187 -0.5 L 422.187 0 L 424.183 0 L 424.183 -0.5 L 424.183 -1 L 422.187 -1 L 422.187 -0.5 Z M 426.179 -0.5 L 426.179 0 L 428.175 0 L 428.175 -0.5 L 428.175 -1 L 426.179 -1 L 426.179 -0.5 Z M 430.171 -0.5 L 430.171 0 L 432.167 0 L 432.167 -0.5 L 432.167 -1 L 430.171 -1 L 430.171 -0.5 Z M 434.164 -0.5 L 434.164 0 L 436.16 0 L 436.16 -0.5 L 436.16 -1 L 434.164 -1 L 434.164 -0.5 Z M 438.156 -0.5 L 438.156 0 L 440.152 0 L 440.152 -0.5 L 440.152 -1 L 438.156 -1 L 438.156 -0.5 Z M 442.148 -0.5 L 442.148 0 L 444.144 0 L 444.144 -0.5 L 444.144 -1 L 442.148 -1 L 442.148 -0.5 Z M 446.141 -0.5 L 446.141 0 L 448.137 0 L 448.137 -0.5 L 448.137 -1 L 446.141 -1 L 446.141 -0.5 Z M 450.133 -0.5 L 450.133 0 L 452.129 0 L 452.129 -0.5 L 452.129 -1 L 450.133 -1 L 450.133 -0.5 Z M 454.125 -0.5 L 454.125 0 L 456.121 0 L 456.121 -0.5 L 456.121 -1 L 454.125 -1 L 454.125 -0.5 Z M 458.117 -0.5 L 458.117 0 L 460.114 0 L 460.114 -0.5 L 460.114 -1 L 458.117 -1 L 458.117 -0.5 Z M 462.11 -0.5 L 462.11 0 L 464.106 0 L 464.106 -0.5 L 464.106 -1 L 462.11 -1 L 462.11 -0.5 Z M 466.102 -0.5 L 466.102 0 L 468.098 0 L 468.098 -0.5 L 468.098 -1 L 466.102 -1 L 466.102 -0.5 Z M 470.094 -0.5 L 470.094 0 L 472.091 0 L 472.091 -0.5 L 472.091 -1 L 470.094 -1 L 470.094 -0.5 Z M 474.087 -0.5 L 474.087 0 L 476.083 0 L 476.083 -0.5 L 476.083 -1 L 474.087 -1 L 474.087 -0.5 Z M 478.079 -0.5 L 478.079 0 L 480.075 0 L 480.075 -0.5 L 480.075 -1 L 478.079 -1 L 478.079 -0.5 Z M 482.071 -0.5 L 482.071 0 L 484.068 0 L 484.068 -0.5 L 484.068 -1 L 482.071 -1 L 482.071 -0.5 Z M 486.064 -0.5 L 486.064 0 L 488.06 0 L 488.06 -0.5 L 488.06 -1 L 486.064 -1 L 486.064 -0.5 Z M 490.056 -0.5 L 490.056 0 L 492.052 0 L 492.052 -0.5 L 492.052 -1 L 490.056 -1 L 490.056 -0.5 Z M 494.048 -0.5 L 494.048 0 L 496.044 0 L 496.044 -0.5 L 496.044 -1 L 494.048 -1 L 494.048 -0.5 Z M 498.041 -0.5 L 498.041 0 L 500.037 0 L 500.037 -0.5 L 500.037 -1 L 498.041 -1 L 498.041 -0.5 Z M 502.033 -0.5 L 502.033 0 L 504.029 0 L 504.029 -0.5 L 504.029 -1 L 502.033 -1 L 502.033 -0.5 Z M 506.025 -0.5 L 506.025 0 L 508.021 0 L 508.021 -0.5 L 508.021 -1 L 506.025 -1 L 506.025 -0.5 Z M 510.018 -0.5 L 510.018 0 L 512.014 0 L 512.014 -0.5 L 512.014 -1 L 510.018 -1 L 510.018 -0.5 Z M 514.01 -0.5 L 514.01 0 L 516.006 0 L 516.006 -0.5 L 516.006 -1 L 514.01 -1 L 514.01 -0.5 Z M 518.002 -0.5 L 518.002 0 L 519 0 L 519 -0.5 L 519 -1 L 518.002 -1 L 518.002 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2212fc0c032441fb-4bdff6b8",
    style: {
      position: "relative",
      width: 74,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, props.text2 ?? "Nom du produit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0
    }
  }, props.text3 ?? "Matière : Cuir ivoirien d'exception"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, props.text4 ?? "12 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Quantit\xE9 : 2")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2212fc0c032441fb-4bdff6b8",
    style: {
      position: "relative",
      width: 74,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Nom du produit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0
    }
  }, "Mati\xE8re : Cuir ivoirien d'exception"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "12 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Quantit\xE9 : 2")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2212fc0c032441fb-4bdff6b8",
    style: {
      position: "relative",
      width: 74,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Nom du produit"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "14px",
      letterSpacing: "0.020em",
      color: "var(--color-secondary-300)",
      flexShrink: 0
    }
  }, "Mati\xE8re : Cuir ivoirien d'exception"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "12 000 FCFA"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Quantit\xE9 : 2"))))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 519 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 0.998 0 L 0.998 -0.5 L 0.998 -1 L 0 -1 L 0 -0.5 Z M 2.994 -0.5 L 2.994 0 L 4.99 0 L 4.99 -0.5 L 4.99 -1 L 2.994 -1 L 2.994 -0.5 Z M 6.987 -0.5 L 6.987 0 L 8.983 0 L 8.983 -0.5 L 8.983 -1 L 6.987 -1 L 6.987 -0.5 Z M 10.979 -0.5 L 10.979 0 L 12.975 0 L 12.975 -0.5 L 12.975 -1 L 10.979 -1 L 10.979 -0.5 Z M 14.971 -0.5 L 14.971 0 L 16.967 0 L 16.967 -0.5 L 16.967 -1 L 14.971 -1 L 14.971 -0.5 Z M 18.963 -0.5 L 18.963 0 L 20.96 0 L 20.96 -0.5 L 20.96 -1 L 18.963 -1 L 18.963 -0.5 Z M 22.956 -0.5 L 22.956 0 L 24.952 0 L 24.952 -0.5 L 24.952 -1 L 22.956 -1 L 22.956 -0.5 Z M 26.948 -0.5 L 26.948 0 L 28.944 0 L 28.944 -0.5 L 28.944 -1 L 26.948 -1 L 26.948 -0.5 Z M 30.94 -0.5 L 30.94 0 L 32.937 0 L 32.937 -0.5 L 32.937 -1 L 30.94 -1 L 30.94 -0.5 Z M 34.933 -0.5 L 34.933 0 L 36.929 0 L 36.929 -0.5 L 36.929 -1 L 34.933 -1 L 34.933 -0.5 Z M 38.925 -0.5 L 38.925 0 L 40.921 0 L 40.921 -0.5 L 40.921 -1 L 38.925 -1 L 38.925 -0.5 Z M 42.917 -0.5 L 42.917 0 L 44.913 0 L 44.913 -0.5 L 44.913 -1 L 42.917 -1 L 42.917 -0.5 Z M 46.91 -0.5 L 46.91 0 L 48.906 0 L 48.906 -0.5 L 48.906 -1 L 46.91 -1 L 46.91 -0.5 Z M 50.902 -0.5 L 50.902 0 L 52.898 0 L 52.898 -0.5 L 52.898 -1 L 50.902 -1 L 50.902 -0.5 Z M 54.894 -0.5 L 54.894 0 L 56.89 0 L 56.89 -0.5 L 56.89 -1 L 54.894 -1 L 54.894 -0.5 Z M 58.887 -0.5 L 58.887 0 L 60.883 0 L 60.883 -0.5 L 60.883 -1 L 58.887 -1 L 58.887 -0.5 Z M 62.879 -0.5 L 62.879 0 L 64.875 0 L 64.875 -0.5 L 64.875 -1 L 62.879 -1 L 62.879 -0.5 Z M 66.871 -0.5 L 66.871 0 L 68.867 0 L 68.867 -0.5 L 68.867 -1 L 66.871 -1 L 66.871 -0.5 Z M 70.863 -0.5 L 70.863 0 L 72.86 0 L 72.86 -0.5 L 72.86 -1 L 70.863 -1 L 70.863 -0.5 Z M 74.856 -0.5 L 74.856 0 L 76.852 0 L 76.852 -0.5 L 76.852 -1 L 74.856 -1 L 74.856 -0.5 Z M 78.848 -0.5 L 78.848 0 L 80.844 0 L 80.844 -0.5 L 80.844 -1 L 78.848 -1 L 78.848 -0.5 Z M 82.84 -0.5 L 82.84 0 L 84.837 0 L 84.837 -0.5 L 84.837 -1 L 82.84 -1 L 82.84 -0.5 Z M 86.833 -0.5 L 86.833 0 L 88.829 0 L 88.829 -0.5 L 88.829 -1 L 86.833 -1 L 86.833 -0.5 Z M 90.825 -0.5 L 90.825 0 L 92.821 0 L 92.821 -0.5 L 92.821 -1 L 90.825 -1 L 90.825 -0.5 Z M 94.817 -0.5 L 94.817 0 L 96.813 0 L 96.813 -0.5 L 96.813 -1 L 94.817 -1 L 94.817 -0.5 Z M 98.81 -0.5 L 98.81 0 L 100.806 0 L 100.806 -0.5 L 100.806 -1 L 98.81 -1 L 98.81 -0.5 Z M 102.802 -0.5 L 102.802 0 L 104.798 0 L 104.798 -0.5 L 104.798 -1 L 102.802 -1 L 102.802 -0.5 Z M 106.794 -0.5 L 106.794 0 L 108.79 0 L 108.79 -0.5 L 108.79 -1 L 106.794 -1 L 106.794 -0.5 Z M 110.787 -0.5 L 110.787 0 L 112.783 0 L 112.783 -0.5 L 112.783 -1 L 110.787 -1 L 110.787 -0.5 Z M 114.779 -0.5 L 114.779 0 L 116.775 0 L 116.775 -0.5 L 116.775 -1 L 114.779 -1 L 114.779 -0.5 Z M 118.771 -0.5 L 118.771 0 L 120.767 0 L 120.767 -0.5 L 120.767 -1 L 118.771 -1 L 118.771 -0.5 Z M 122.764 -0.5 L 122.764 0 L 124.76 0 L 124.76 -0.5 L 124.76 -1 L 122.764 -1 L 122.764 -0.5 Z M 126.756 -0.5 L 126.756 0 L 128.752 0 L 128.752 -0.5 L 128.752 -1 L 126.756 -1 L 126.756 -0.5 Z M 130.748 -0.5 L 130.748 0 L 132.744 0 L 132.744 -0.5 L 132.744 -1 L 130.748 -1 L 130.748 -0.5 Z M 134.74 -0.5 L 134.74 0 L 136.737 0 L 136.737 -0.5 L 136.737 -1 L 134.74 -1 L 134.74 -0.5 Z M 138.733 -0.5 L 138.733 0 L 140.729 0 L 140.729 -0.5 L 140.729 -1 L 138.733 -1 L 138.733 -0.5 Z M 142.725 -0.5 L 142.725 0 L 144.721 0 L 144.721 -0.5 L 144.721 -1 L 142.725 -1 L 142.725 -0.5 Z M 146.717 -0.5 L 146.717 0 L 148.714 0 L 148.714 -0.5 L 148.714 -1 L 146.717 -1 L 146.717 -0.5 Z M 150.71 -0.5 L 150.71 0 L 152.706 0 L 152.706 -0.5 L 152.706 -1 L 150.71 -1 L 150.71 -0.5 Z M 154.702 -0.5 L 154.702 0 L 156.698 0 L 156.698 -0.5 L 156.698 -1 L 154.702 -1 L 154.702 -0.5 Z M 158.694 -0.5 L 158.694 0 L 160.69 0 L 160.69 -0.5 L 160.69 -1 L 158.694 -1 L 158.694 -0.5 Z M 162.687 -0.5 L 162.687 0 L 164.683 0 L 164.683 -0.5 L 164.683 -1 L 162.687 -1 L 162.687 -0.5 Z M 166.679 -0.5 L 166.679 0 L 168.675 0 L 168.675 -0.5 L 168.675 -1 L 166.679 -1 L 166.679 -0.5 Z M 170.671 -0.5 L 170.671 0 L 172.667 0 L 172.667 -0.5 L 172.667 -1 L 170.671 -1 L 170.671 -0.5 Z M 174.664 -0.5 L 174.664 0 L 176.66 0 L 176.66 -0.5 L 176.66 -1 L 174.664 -1 L 174.664 -0.5 Z M 178.656 -0.5 L 178.656 0 L 180.652 0 L 180.652 -0.5 L 180.652 -1 L 178.656 -1 L 178.656 -0.5 Z M 182.648 -0.5 L 182.648 0 L 184.644 0 L 184.644 -0.5 L 184.644 -1 L 182.648 -1 L 182.648 -0.5 Z M 186.64 -0.5 L 186.64 0 L 188.637 0 L 188.637 -0.5 L 188.637 -1 L 186.64 -1 L 186.64 -0.5 Z M 190.633 -0.5 L 190.633 0 L 192.629 0 L 192.629 -0.5 L 192.629 -1 L 190.633 -1 L 190.633 -0.5 Z M 194.625 -0.5 L 194.625 0 L 196.621 0 L 196.621 -0.5 L 196.621 -1 L 194.625 -1 L 194.625 -0.5 Z M 198.617 -0.5 L 198.617 0 L 200.614 0 L 200.614 -0.5 L 200.614 -1 L 198.617 -1 L 198.617 -0.5 Z M 202.61 -0.5 L 202.61 0 L 204.606 0 L 204.606 -0.5 L 204.606 -1 L 202.61 -1 L 202.61 -0.5 Z M 206.602 -0.5 L 206.602 0 L 208.598 0 L 208.598 -0.5 L 208.598 -1 L 206.602 -1 L 206.602 -0.5 Z M 210.594 -0.5 L 210.594 0 L 212.59 0 L 212.59 -0.5 L 212.59 -1 L 210.594 -1 L 210.594 -0.5 Z M 214.587 -0.5 L 214.587 0 L 216.583 0 L 216.583 -0.5 L 216.583 -1 L 214.587 -1 L 214.587 -0.5 Z M 218.579 -0.5 L 218.579 0 L 220.575 0 L 220.575 -0.5 L 220.575 -1 L 218.579 -1 L 218.579 -0.5 Z M 222.571 -0.5 L 222.571 0 L 224.567 0 L 224.567 -0.5 L 224.567 -1 L 222.571 -1 L 222.571 -0.5 Z M 226.564 -0.5 L 226.564 0 L 228.56 0 L 228.56 -0.5 L 228.56 -1 L 226.564 -1 L 226.564 -0.5 Z M 230.556 -0.5 L 230.556 0 L 232.552 0 L 232.552 -0.5 L 232.552 -1 L 230.556 -1 L 230.556 -0.5 Z M 234.548 -0.5 L 234.548 0 L 236.544 0 L 236.544 -0.5 L 236.544 -1 L 234.548 -1 L 234.548 -0.5 Z M 238.54 -0.5 L 238.54 0 L 240.537 0 L 240.537 -0.5 L 240.537 -1 L 238.54 -1 L 238.54 -0.5 Z M 242.533 -0.5 L 242.533 0 L 244.529 0 L 244.529 -0.5 L 244.529 -1 L 242.533 -1 L 242.533 -0.5 Z M 246.525 -0.5 L 246.525 0 L 248.521 0 L 248.521 -0.5 L 248.521 -1 L 246.525 -1 L 246.525 -0.5 Z M 250.517 -0.5 L 250.517 0 L 252.514 0 L 252.514 -0.5 L 252.514 -1 L 250.517 -1 L 250.517 -0.5 Z M 254.51 -0.5 L 254.51 0 L 256.506 0 L 256.506 -0.5 L 256.506 -1 L 254.51 -1 L 254.51 -0.5 Z M 258.502 -0.5 L 258.502 0 L 260.498 0 L 260.498 -0.5 L 260.498 -1 L 258.502 -1 L 258.502 -0.5 Z M 262.494 -0.5 L 262.494 0 L 264.49 0 L 264.49 -0.5 L 264.49 -1 L 262.494 -1 L 262.494 -0.5 Z M 266.487 -0.5 L 266.487 0 L 268.483 0 L 268.483 -0.5 L 268.483 -1 L 266.487 -1 L 266.487 -0.5 Z M 270.479 -0.5 L 270.479 0 L 272.475 0 L 272.475 -0.5 L 272.475 -1 L 270.479 -1 L 270.479 -0.5 Z M 274.471 -0.5 L 274.471 0 L 276.467 0 L 276.467 -0.5 L 276.467 -1 L 274.471 -1 L 274.471 -0.5 Z M 278.464 -0.5 L 278.464 0 L 280.46 0 L 280.46 -0.5 L 280.46 -1 L 278.464 -1 L 278.464 -0.5 Z M 282.456 -0.5 L 282.456 0 L 284.452 0 L 284.452 -0.5 L 284.452 -1 L 282.456 -1 L 282.456 -0.5 Z M 286.448 -0.5 L 286.448 0 L 288.444 0 L 288.444 -0.5 L 288.444 -1 L 286.448 -1 L 286.448 -0.5 Z M 290.44 -0.5 L 290.44 0 L 292.437 0 L 292.437 -0.5 L 292.437 -1 L 290.44 -1 L 290.44 -0.5 Z M 294.433 -0.5 L 294.433 0 L 296.429 0 L 296.429 -0.5 L 296.429 -1 L 294.433 -1 L 294.433 -0.5 Z M 298.425 -0.5 L 298.425 0 L 300.421 0 L 300.421 -0.5 L 300.421 -1 L 298.425 -1 L 298.425 -0.5 Z M 302.417 -0.5 L 302.417 0 L 304.414 0 L 304.414 -0.5 L 304.414 -1 L 302.417 -1 L 302.417 -0.5 Z M 306.41 -0.5 L 306.41 0 L 308.406 0 L 308.406 -0.5 L 308.406 -1 L 306.41 -1 L 306.41 -0.5 Z M 310.402 -0.5 L 310.402 0 L 312.398 0 L 312.398 -0.5 L 312.398 -1 L 310.402 -1 L 310.402 -0.5 Z M 314.394 -0.5 L 314.394 0 L 316.391 0 L 316.391 -0.5 L 316.391 -1 L 314.394 -1 L 314.394 -0.5 Z M 318.387 -0.5 L 318.387 0 L 320.383 0 L 320.383 -0.5 L 320.383 -1 L 318.387 -1 L 318.387 -0.5 Z M 322.379 -0.5 L 322.379 0 L 324.375 0 L 324.375 -0.5 L 324.375 -1 L 322.379 -1 L 322.379 -0.5 Z M 326.371 -0.5 L 326.371 0 L 328.367 0 L 328.367 -0.5 L 328.367 -1 L 326.371 -1 L 326.371 -0.5 Z M 330.364 -0.5 L 330.364 0 L 332.36 0 L 332.36 -0.5 L 332.36 -1 L 330.364 -1 L 330.364 -0.5 Z M 334.356 -0.5 L 334.356 0 L 336.352 0 L 336.352 -0.5 L 336.352 -1 L 334.356 -1 L 334.356 -0.5 Z M 338.348 -0.5 L 338.348 0 L 340.344 0 L 340.344 -0.5 L 340.344 -1 L 338.348 -1 L 338.348 -0.5 Z M 342.341 -0.5 L 342.341 0 L 344.337 0 L 344.337 -0.5 L 344.337 -1 L 342.341 -1 L 342.341 -0.5 Z M 346.333 -0.5 L 346.333 0 L 348.329 0 L 348.329 -0.5 L 348.329 -1 L 346.333 -1 L 346.333 -0.5 Z M 350.325 -0.5 L 350.325 0 L 352.321 0 L 352.321 -0.5 L 352.321 -1 L 350.325 -1 L 350.325 -0.5 Z M 354.317 -0.5 L 354.317 0 L 356.314 0 L 356.314 -0.5 L 356.314 -1 L 354.317 -1 L 354.317 -0.5 Z M 358.31 -0.5 L 358.31 0 L 360.306 0 L 360.306 -0.5 L 360.306 -1 L 358.31 -1 L 358.31 -0.5 Z M 362.302 -0.5 L 362.302 0 L 364.298 0 L 364.298 -0.5 L 364.298 -1 L 362.302 -1 L 362.302 -0.5 Z M 366.294 -0.5 L 366.294 0 L 368.291 0 L 368.291 -0.5 L 368.291 -1 L 366.294 -1 L 366.294 -0.5 Z M 370.287 -0.5 L 370.287 0 L 372.283 0 L 372.283 -0.5 L 372.283 -1 L 370.287 -1 L 370.287 -0.5 Z M 374.279 -0.5 L 374.279 0 L 376.275 0 L 376.275 -0.5 L 376.275 -1 L 374.279 -1 L 374.279 -0.5 Z M 378.271 -0.5 L 378.271 0 L 380.267 0 L 380.267 -0.5 L 380.267 -1 L 378.271 -1 L 378.271 -0.5 Z M 382.264 -0.5 L 382.264 0 L 384.26 0 L 384.26 -0.5 L 384.26 -1 L 382.264 -1 L 382.264 -0.5 Z M 386.256 -0.5 L 386.256 0 L 388.252 0 L 388.252 -0.5 L 388.252 -1 L 386.256 -1 L 386.256 -0.5 Z M 390.248 -0.5 L 390.248 0 L 392.244 0 L 392.244 -0.5 L 392.244 -1 L 390.248 -1 L 390.248 -0.5 Z M 394.241 -0.5 L 394.241 0 L 396.237 0 L 396.237 -0.5 L 396.237 -1 L 394.241 -1 L 394.241 -0.5 Z M 398.233 -0.5 L 398.233 0 L 400.229 0 L 400.229 -0.5 L 400.229 -1 L 398.233 -1 L 398.233 -0.5 Z M 402.225 -0.5 L 402.225 0 L 404.221 0 L 404.221 -0.5 L 404.221 -1 L 402.225 -1 L 402.225 -0.5 Z M 406.217 -0.5 L 406.217 0 L 408.214 0 L 408.214 -0.5 L 408.214 -1 L 406.217 -1 L 406.217 -0.5 Z M 410.21 -0.5 L 410.21 0 L 412.206 0 L 412.206 -0.5 L 412.206 -1 L 410.21 -1 L 410.21 -0.5 Z M 414.202 -0.5 L 414.202 0 L 416.198 0 L 416.198 -0.5 L 416.198 -1 L 414.202 -1 L 414.202 -0.5 Z M 418.194 -0.5 L 418.194 0 L 420.191 0 L 420.191 -0.5 L 420.191 -1 L 418.194 -1 L 418.194 -0.5 Z M 422.187 -0.5 L 422.187 0 L 424.183 0 L 424.183 -0.5 L 424.183 -1 L 422.187 -1 L 422.187 -0.5 Z M 426.179 -0.5 L 426.179 0 L 428.175 0 L 428.175 -0.5 L 428.175 -1 L 426.179 -1 L 426.179 -0.5 Z M 430.171 -0.5 L 430.171 0 L 432.167 0 L 432.167 -0.5 L 432.167 -1 L 430.171 -1 L 430.171 -0.5 Z M 434.164 -0.5 L 434.164 0 L 436.16 0 L 436.16 -0.5 L 436.16 -1 L 434.164 -1 L 434.164 -0.5 Z M 438.156 -0.5 L 438.156 0 L 440.152 0 L 440.152 -0.5 L 440.152 -1 L 438.156 -1 L 438.156 -0.5 Z M 442.148 -0.5 L 442.148 0 L 444.144 0 L 444.144 -0.5 L 444.144 -1 L 442.148 -1 L 442.148 -0.5 Z M 446.141 -0.5 L 446.141 0 L 448.137 0 L 448.137 -0.5 L 448.137 -1 L 446.141 -1 L 446.141 -0.5 Z M 450.133 -0.5 L 450.133 0 L 452.129 0 L 452.129 -0.5 L 452.129 -1 L 450.133 -1 L 450.133 -0.5 Z M 454.125 -0.5 L 454.125 0 L 456.121 0 L 456.121 -0.5 L 456.121 -1 L 454.125 -1 L 454.125 -0.5 Z M 458.117 -0.5 L 458.117 0 L 460.114 0 L 460.114 -0.5 L 460.114 -1 L 458.117 -1 L 458.117 -0.5 Z M 462.11 -0.5 L 462.11 0 L 464.106 0 L 464.106 -0.5 L 464.106 -1 L 462.11 -1 L 462.11 -0.5 Z M 466.102 -0.5 L 466.102 0 L 468.098 0 L 468.098 -0.5 L 468.098 -1 L 466.102 -1 L 466.102 -0.5 Z M 470.094 -0.5 L 470.094 0 L 472.091 0 L 472.091 -0.5 L 472.091 -1 L 470.094 -1 L 470.094 -0.5 Z M 474.087 -0.5 L 474.087 0 L 476.083 0 L 476.083 -0.5 L 476.083 -1 L 474.087 -1 L 474.087 -0.5 Z M 478.079 -0.5 L 478.079 0 L 480.075 0 L 480.075 -0.5 L 480.075 -1 L 478.079 -1 L 478.079 -0.5 Z M 482.071 -0.5 L 482.071 0 L 484.068 0 L 484.068 -0.5 L 484.068 -1 L 482.071 -1 L 482.071 -0.5 Z M 486.064 -0.5 L 486.064 0 L 488.06 0 L 488.06 -0.5 L 488.06 -1 L 486.064 -1 L 486.064 -0.5 Z M 490.056 -0.5 L 490.056 0 L 492.052 0 L 492.052 -0.5 L 492.052 -1 L 490.056 -1 L 490.056 -0.5 Z M 494.048 -0.5 L 494.048 0 L 496.044 0 L 496.044 -0.5 L 496.044 -1 L 494.048 -1 L 494.048 -0.5 Z M 498.041 -0.5 L 498.041 0 L 500.037 0 L 500.037 -0.5 L 500.037 -1 L 498.041 -1 L 498.041 -0.5 Z M 502.033 -0.5 L 502.033 0 L 504.029 0 L 504.029 -0.5 L 504.029 -1 L 502.033 -1 L 502.033 -0.5 Z M 506.025 -0.5 L 506.025 0 L 508.021 0 L 508.021 -0.5 L 508.021 -1 L 506.025 -1 L 506.025 -0.5 Z M 510.018 -0.5 L 510.018 0 L 512.014 0 L 512.014 -0.5 L 512.014 -1 L 510.018 -1 L 510.018 -0.5 Z M 514.01 -0.5 L 514.01 0 L 516.006 0 L 516.006 -0.5 L 516.006 -1 L 514.01 -1 L 514.01 -0.5 Z M 518.002 -0.5 L 518.002 0 L 519 0 L 519 -0.5 L 519 -1 L 518.002 -1 L 518.002 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Livraison"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "2 000 FCFA")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Sous total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "12 000 FCFA")), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 519 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 0.998 0 L 0.998 -0.5 L 0.998 -1 L 0 -1 L 0 -0.5 Z M 2.994 -0.5 L 2.994 0 L 4.99 0 L 4.99 -0.5 L 4.99 -1 L 2.994 -1 L 2.994 -0.5 Z M 6.987 -0.5 L 6.987 0 L 8.983 0 L 8.983 -0.5 L 8.983 -1 L 6.987 -1 L 6.987 -0.5 Z M 10.979 -0.5 L 10.979 0 L 12.975 0 L 12.975 -0.5 L 12.975 -1 L 10.979 -1 L 10.979 -0.5 Z M 14.971 -0.5 L 14.971 0 L 16.967 0 L 16.967 -0.5 L 16.967 -1 L 14.971 -1 L 14.971 -0.5 Z M 18.963 -0.5 L 18.963 0 L 20.96 0 L 20.96 -0.5 L 20.96 -1 L 18.963 -1 L 18.963 -0.5 Z M 22.956 -0.5 L 22.956 0 L 24.952 0 L 24.952 -0.5 L 24.952 -1 L 22.956 -1 L 22.956 -0.5 Z M 26.948 -0.5 L 26.948 0 L 28.944 0 L 28.944 -0.5 L 28.944 -1 L 26.948 -1 L 26.948 -0.5 Z M 30.94 -0.5 L 30.94 0 L 32.937 0 L 32.937 -0.5 L 32.937 -1 L 30.94 -1 L 30.94 -0.5 Z M 34.933 -0.5 L 34.933 0 L 36.929 0 L 36.929 -0.5 L 36.929 -1 L 34.933 -1 L 34.933 -0.5 Z M 38.925 -0.5 L 38.925 0 L 40.921 0 L 40.921 -0.5 L 40.921 -1 L 38.925 -1 L 38.925 -0.5 Z M 42.917 -0.5 L 42.917 0 L 44.913 0 L 44.913 -0.5 L 44.913 -1 L 42.917 -1 L 42.917 -0.5 Z M 46.91 -0.5 L 46.91 0 L 48.906 0 L 48.906 -0.5 L 48.906 -1 L 46.91 -1 L 46.91 -0.5 Z M 50.902 -0.5 L 50.902 0 L 52.898 0 L 52.898 -0.5 L 52.898 -1 L 50.902 -1 L 50.902 -0.5 Z M 54.894 -0.5 L 54.894 0 L 56.89 0 L 56.89 -0.5 L 56.89 -1 L 54.894 -1 L 54.894 -0.5 Z M 58.887 -0.5 L 58.887 0 L 60.883 0 L 60.883 -0.5 L 60.883 -1 L 58.887 -1 L 58.887 -0.5 Z M 62.879 -0.5 L 62.879 0 L 64.875 0 L 64.875 -0.5 L 64.875 -1 L 62.879 -1 L 62.879 -0.5 Z M 66.871 -0.5 L 66.871 0 L 68.867 0 L 68.867 -0.5 L 68.867 -1 L 66.871 -1 L 66.871 -0.5 Z M 70.863 -0.5 L 70.863 0 L 72.86 0 L 72.86 -0.5 L 72.86 -1 L 70.863 -1 L 70.863 -0.5 Z M 74.856 -0.5 L 74.856 0 L 76.852 0 L 76.852 -0.5 L 76.852 -1 L 74.856 -1 L 74.856 -0.5 Z M 78.848 -0.5 L 78.848 0 L 80.844 0 L 80.844 -0.5 L 80.844 -1 L 78.848 -1 L 78.848 -0.5 Z M 82.84 -0.5 L 82.84 0 L 84.837 0 L 84.837 -0.5 L 84.837 -1 L 82.84 -1 L 82.84 -0.5 Z M 86.833 -0.5 L 86.833 0 L 88.829 0 L 88.829 -0.5 L 88.829 -1 L 86.833 -1 L 86.833 -0.5 Z M 90.825 -0.5 L 90.825 0 L 92.821 0 L 92.821 -0.5 L 92.821 -1 L 90.825 -1 L 90.825 -0.5 Z M 94.817 -0.5 L 94.817 0 L 96.813 0 L 96.813 -0.5 L 96.813 -1 L 94.817 -1 L 94.817 -0.5 Z M 98.81 -0.5 L 98.81 0 L 100.806 0 L 100.806 -0.5 L 100.806 -1 L 98.81 -1 L 98.81 -0.5 Z M 102.802 -0.5 L 102.802 0 L 104.798 0 L 104.798 -0.5 L 104.798 -1 L 102.802 -1 L 102.802 -0.5 Z M 106.794 -0.5 L 106.794 0 L 108.79 0 L 108.79 -0.5 L 108.79 -1 L 106.794 -1 L 106.794 -0.5 Z M 110.787 -0.5 L 110.787 0 L 112.783 0 L 112.783 -0.5 L 112.783 -1 L 110.787 -1 L 110.787 -0.5 Z M 114.779 -0.5 L 114.779 0 L 116.775 0 L 116.775 -0.5 L 116.775 -1 L 114.779 -1 L 114.779 -0.5 Z M 118.771 -0.5 L 118.771 0 L 120.767 0 L 120.767 -0.5 L 120.767 -1 L 118.771 -1 L 118.771 -0.5 Z M 122.764 -0.5 L 122.764 0 L 124.76 0 L 124.76 -0.5 L 124.76 -1 L 122.764 -1 L 122.764 -0.5 Z M 126.756 -0.5 L 126.756 0 L 128.752 0 L 128.752 -0.5 L 128.752 -1 L 126.756 -1 L 126.756 -0.5 Z M 130.748 -0.5 L 130.748 0 L 132.744 0 L 132.744 -0.5 L 132.744 -1 L 130.748 -1 L 130.748 -0.5 Z M 134.74 -0.5 L 134.74 0 L 136.737 0 L 136.737 -0.5 L 136.737 -1 L 134.74 -1 L 134.74 -0.5 Z M 138.733 -0.5 L 138.733 0 L 140.729 0 L 140.729 -0.5 L 140.729 -1 L 138.733 -1 L 138.733 -0.5 Z M 142.725 -0.5 L 142.725 0 L 144.721 0 L 144.721 -0.5 L 144.721 -1 L 142.725 -1 L 142.725 -0.5 Z M 146.717 -0.5 L 146.717 0 L 148.714 0 L 148.714 -0.5 L 148.714 -1 L 146.717 -1 L 146.717 -0.5 Z M 150.71 -0.5 L 150.71 0 L 152.706 0 L 152.706 -0.5 L 152.706 -1 L 150.71 -1 L 150.71 -0.5 Z M 154.702 -0.5 L 154.702 0 L 156.698 0 L 156.698 -0.5 L 156.698 -1 L 154.702 -1 L 154.702 -0.5 Z M 158.694 -0.5 L 158.694 0 L 160.69 0 L 160.69 -0.5 L 160.69 -1 L 158.694 -1 L 158.694 -0.5 Z M 162.687 -0.5 L 162.687 0 L 164.683 0 L 164.683 -0.5 L 164.683 -1 L 162.687 -1 L 162.687 -0.5 Z M 166.679 -0.5 L 166.679 0 L 168.675 0 L 168.675 -0.5 L 168.675 -1 L 166.679 -1 L 166.679 -0.5 Z M 170.671 -0.5 L 170.671 0 L 172.667 0 L 172.667 -0.5 L 172.667 -1 L 170.671 -1 L 170.671 -0.5 Z M 174.664 -0.5 L 174.664 0 L 176.66 0 L 176.66 -0.5 L 176.66 -1 L 174.664 -1 L 174.664 -0.5 Z M 178.656 -0.5 L 178.656 0 L 180.652 0 L 180.652 -0.5 L 180.652 -1 L 178.656 -1 L 178.656 -0.5 Z M 182.648 -0.5 L 182.648 0 L 184.644 0 L 184.644 -0.5 L 184.644 -1 L 182.648 -1 L 182.648 -0.5 Z M 186.64 -0.5 L 186.64 0 L 188.637 0 L 188.637 -0.5 L 188.637 -1 L 186.64 -1 L 186.64 -0.5 Z M 190.633 -0.5 L 190.633 0 L 192.629 0 L 192.629 -0.5 L 192.629 -1 L 190.633 -1 L 190.633 -0.5 Z M 194.625 -0.5 L 194.625 0 L 196.621 0 L 196.621 -0.5 L 196.621 -1 L 194.625 -1 L 194.625 -0.5 Z M 198.617 -0.5 L 198.617 0 L 200.614 0 L 200.614 -0.5 L 200.614 -1 L 198.617 -1 L 198.617 -0.5 Z M 202.61 -0.5 L 202.61 0 L 204.606 0 L 204.606 -0.5 L 204.606 -1 L 202.61 -1 L 202.61 -0.5 Z M 206.602 -0.5 L 206.602 0 L 208.598 0 L 208.598 -0.5 L 208.598 -1 L 206.602 -1 L 206.602 -0.5 Z M 210.594 -0.5 L 210.594 0 L 212.59 0 L 212.59 -0.5 L 212.59 -1 L 210.594 -1 L 210.594 -0.5 Z M 214.587 -0.5 L 214.587 0 L 216.583 0 L 216.583 -0.5 L 216.583 -1 L 214.587 -1 L 214.587 -0.5 Z M 218.579 -0.5 L 218.579 0 L 220.575 0 L 220.575 -0.5 L 220.575 -1 L 218.579 -1 L 218.579 -0.5 Z M 222.571 -0.5 L 222.571 0 L 224.567 0 L 224.567 -0.5 L 224.567 -1 L 222.571 -1 L 222.571 -0.5 Z M 226.564 -0.5 L 226.564 0 L 228.56 0 L 228.56 -0.5 L 228.56 -1 L 226.564 -1 L 226.564 -0.5 Z M 230.556 -0.5 L 230.556 0 L 232.552 0 L 232.552 -0.5 L 232.552 -1 L 230.556 -1 L 230.556 -0.5 Z M 234.548 -0.5 L 234.548 0 L 236.544 0 L 236.544 -0.5 L 236.544 -1 L 234.548 -1 L 234.548 -0.5 Z M 238.54 -0.5 L 238.54 0 L 240.537 0 L 240.537 -0.5 L 240.537 -1 L 238.54 -1 L 238.54 -0.5 Z M 242.533 -0.5 L 242.533 0 L 244.529 0 L 244.529 -0.5 L 244.529 -1 L 242.533 -1 L 242.533 -0.5 Z M 246.525 -0.5 L 246.525 0 L 248.521 0 L 248.521 -0.5 L 248.521 -1 L 246.525 -1 L 246.525 -0.5 Z M 250.517 -0.5 L 250.517 0 L 252.514 0 L 252.514 -0.5 L 252.514 -1 L 250.517 -1 L 250.517 -0.5 Z M 254.51 -0.5 L 254.51 0 L 256.506 0 L 256.506 -0.5 L 256.506 -1 L 254.51 -1 L 254.51 -0.5 Z M 258.502 -0.5 L 258.502 0 L 260.498 0 L 260.498 -0.5 L 260.498 -1 L 258.502 -1 L 258.502 -0.5 Z M 262.494 -0.5 L 262.494 0 L 264.49 0 L 264.49 -0.5 L 264.49 -1 L 262.494 -1 L 262.494 -0.5 Z M 266.487 -0.5 L 266.487 0 L 268.483 0 L 268.483 -0.5 L 268.483 -1 L 266.487 -1 L 266.487 -0.5 Z M 270.479 -0.5 L 270.479 0 L 272.475 0 L 272.475 -0.5 L 272.475 -1 L 270.479 -1 L 270.479 -0.5 Z M 274.471 -0.5 L 274.471 0 L 276.467 0 L 276.467 -0.5 L 276.467 -1 L 274.471 -1 L 274.471 -0.5 Z M 278.464 -0.5 L 278.464 0 L 280.46 0 L 280.46 -0.5 L 280.46 -1 L 278.464 -1 L 278.464 -0.5 Z M 282.456 -0.5 L 282.456 0 L 284.452 0 L 284.452 -0.5 L 284.452 -1 L 282.456 -1 L 282.456 -0.5 Z M 286.448 -0.5 L 286.448 0 L 288.444 0 L 288.444 -0.5 L 288.444 -1 L 286.448 -1 L 286.448 -0.5 Z M 290.44 -0.5 L 290.44 0 L 292.437 0 L 292.437 -0.5 L 292.437 -1 L 290.44 -1 L 290.44 -0.5 Z M 294.433 -0.5 L 294.433 0 L 296.429 0 L 296.429 -0.5 L 296.429 -1 L 294.433 -1 L 294.433 -0.5 Z M 298.425 -0.5 L 298.425 0 L 300.421 0 L 300.421 -0.5 L 300.421 -1 L 298.425 -1 L 298.425 -0.5 Z M 302.417 -0.5 L 302.417 0 L 304.414 0 L 304.414 -0.5 L 304.414 -1 L 302.417 -1 L 302.417 -0.5 Z M 306.41 -0.5 L 306.41 0 L 308.406 0 L 308.406 -0.5 L 308.406 -1 L 306.41 -1 L 306.41 -0.5 Z M 310.402 -0.5 L 310.402 0 L 312.398 0 L 312.398 -0.5 L 312.398 -1 L 310.402 -1 L 310.402 -0.5 Z M 314.394 -0.5 L 314.394 0 L 316.391 0 L 316.391 -0.5 L 316.391 -1 L 314.394 -1 L 314.394 -0.5 Z M 318.387 -0.5 L 318.387 0 L 320.383 0 L 320.383 -0.5 L 320.383 -1 L 318.387 -1 L 318.387 -0.5 Z M 322.379 -0.5 L 322.379 0 L 324.375 0 L 324.375 -0.5 L 324.375 -1 L 322.379 -1 L 322.379 -0.5 Z M 326.371 -0.5 L 326.371 0 L 328.367 0 L 328.367 -0.5 L 328.367 -1 L 326.371 -1 L 326.371 -0.5 Z M 330.364 -0.5 L 330.364 0 L 332.36 0 L 332.36 -0.5 L 332.36 -1 L 330.364 -1 L 330.364 -0.5 Z M 334.356 -0.5 L 334.356 0 L 336.352 0 L 336.352 -0.5 L 336.352 -1 L 334.356 -1 L 334.356 -0.5 Z M 338.348 -0.5 L 338.348 0 L 340.344 0 L 340.344 -0.5 L 340.344 -1 L 338.348 -1 L 338.348 -0.5 Z M 342.341 -0.5 L 342.341 0 L 344.337 0 L 344.337 -0.5 L 344.337 -1 L 342.341 -1 L 342.341 -0.5 Z M 346.333 -0.5 L 346.333 0 L 348.329 0 L 348.329 -0.5 L 348.329 -1 L 346.333 -1 L 346.333 -0.5 Z M 350.325 -0.5 L 350.325 0 L 352.321 0 L 352.321 -0.5 L 352.321 -1 L 350.325 -1 L 350.325 -0.5 Z M 354.317 -0.5 L 354.317 0 L 356.314 0 L 356.314 -0.5 L 356.314 -1 L 354.317 -1 L 354.317 -0.5 Z M 358.31 -0.5 L 358.31 0 L 360.306 0 L 360.306 -0.5 L 360.306 -1 L 358.31 -1 L 358.31 -0.5 Z M 362.302 -0.5 L 362.302 0 L 364.298 0 L 364.298 -0.5 L 364.298 -1 L 362.302 -1 L 362.302 -0.5 Z M 366.294 -0.5 L 366.294 0 L 368.291 0 L 368.291 -0.5 L 368.291 -1 L 366.294 -1 L 366.294 -0.5 Z M 370.287 -0.5 L 370.287 0 L 372.283 0 L 372.283 -0.5 L 372.283 -1 L 370.287 -1 L 370.287 -0.5 Z M 374.279 -0.5 L 374.279 0 L 376.275 0 L 376.275 -0.5 L 376.275 -1 L 374.279 -1 L 374.279 -0.5 Z M 378.271 -0.5 L 378.271 0 L 380.267 0 L 380.267 -0.5 L 380.267 -1 L 378.271 -1 L 378.271 -0.5 Z M 382.264 -0.5 L 382.264 0 L 384.26 0 L 384.26 -0.5 L 384.26 -1 L 382.264 -1 L 382.264 -0.5 Z M 386.256 -0.5 L 386.256 0 L 388.252 0 L 388.252 -0.5 L 388.252 -1 L 386.256 -1 L 386.256 -0.5 Z M 390.248 -0.5 L 390.248 0 L 392.244 0 L 392.244 -0.5 L 392.244 -1 L 390.248 -1 L 390.248 -0.5 Z M 394.241 -0.5 L 394.241 0 L 396.237 0 L 396.237 -0.5 L 396.237 -1 L 394.241 -1 L 394.241 -0.5 Z M 398.233 -0.5 L 398.233 0 L 400.229 0 L 400.229 -0.5 L 400.229 -1 L 398.233 -1 L 398.233 -0.5 Z M 402.225 -0.5 L 402.225 0 L 404.221 0 L 404.221 -0.5 L 404.221 -1 L 402.225 -1 L 402.225 -0.5 Z M 406.217 -0.5 L 406.217 0 L 408.214 0 L 408.214 -0.5 L 408.214 -1 L 406.217 -1 L 406.217 -0.5 Z M 410.21 -0.5 L 410.21 0 L 412.206 0 L 412.206 -0.5 L 412.206 -1 L 410.21 -1 L 410.21 -0.5 Z M 414.202 -0.5 L 414.202 0 L 416.198 0 L 416.198 -0.5 L 416.198 -1 L 414.202 -1 L 414.202 -0.5 Z M 418.194 -0.5 L 418.194 0 L 420.191 0 L 420.191 -0.5 L 420.191 -1 L 418.194 -1 L 418.194 -0.5 Z M 422.187 -0.5 L 422.187 0 L 424.183 0 L 424.183 -0.5 L 424.183 -1 L 422.187 -1 L 422.187 -0.5 Z M 426.179 -0.5 L 426.179 0 L 428.175 0 L 428.175 -0.5 L 428.175 -1 L 426.179 -1 L 426.179 -0.5 Z M 430.171 -0.5 L 430.171 0 L 432.167 0 L 432.167 -0.5 L 432.167 -1 L 430.171 -1 L 430.171 -0.5 Z M 434.164 -0.5 L 434.164 0 L 436.16 0 L 436.16 -0.5 L 436.16 -1 L 434.164 -1 L 434.164 -0.5 Z M 438.156 -0.5 L 438.156 0 L 440.152 0 L 440.152 -0.5 L 440.152 -1 L 438.156 -1 L 438.156 -0.5 Z M 442.148 -0.5 L 442.148 0 L 444.144 0 L 444.144 -0.5 L 444.144 -1 L 442.148 -1 L 442.148 -0.5 Z M 446.141 -0.5 L 446.141 0 L 448.137 0 L 448.137 -0.5 L 448.137 -1 L 446.141 -1 L 446.141 -0.5 Z M 450.133 -0.5 L 450.133 0 L 452.129 0 L 452.129 -0.5 L 452.129 -1 L 450.133 -1 L 450.133 -0.5 Z M 454.125 -0.5 L 454.125 0 L 456.121 0 L 456.121 -0.5 L 456.121 -1 L 454.125 -1 L 454.125 -0.5 Z M 458.117 -0.5 L 458.117 0 L 460.114 0 L 460.114 -0.5 L 460.114 -1 L 458.117 -1 L 458.117 -0.5 Z M 462.11 -0.5 L 462.11 0 L 464.106 0 L 464.106 -0.5 L 464.106 -1 L 462.11 -1 L 462.11 -0.5 Z M 466.102 -0.5 L 466.102 0 L 468.098 0 L 468.098 -0.5 L 468.098 -1 L 466.102 -1 L 466.102 -0.5 Z M 470.094 -0.5 L 470.094 0 L 472.091 0 L 472.091 -0.5 L 472.091 -1 L 470.094 -1 L 470.094 -0.5 Z M 474.087 -0.5 L 474.087 0 L 476.083 0 L 476.083 -0.5 L 476.083 -1 L 474.087 -1 L 474.087 -0.5 Z M 478.079 -0.5 L 478.079 0 L 480.075 0 L 480.075 -0.5 L 480.075 -1 L 478.079 -1 L 478.079 -0.5 Z M 482.071 -0.5 L 482.071 0 L 484.068 0 L 484.068 -0.5 L 484.068 -1 L 482.071 -1 L 482.071 -0.5 Z M 486.064 -0.5 L 486.064 0 L 488.06 0 L 488.06 -0.5 L 488.06 -1 L 486.064 -1 L 486.064 -0.5 Z M 490.056 -0.5 L 490.056 0 L 492.052 0 L 492.052 -0.5 L 492.052 -1 L 490.056 -1 L 490.056 -0.5 Z M 494.048 -0.5 L 494.048 0 L 496.044 0 L 496.044 -0.5 L 496.044 -1 L 494.048 -1 L 494.048 -0.5 Z M 498.041 -0.5 L 498.041 0 L 500.037 0 L 500.037 -0.5 L 500.037 -1 L 498.041 -1 L 498.041 -0.5 Z M 502.033 -0.5 L 502.033 0 L 504.029 0 L 504.029 -0.5 L 504.029 -1 L 502.033 -1 L 502.033 -0.5 Z M 506.025 -0.5 L 506.025 0 L 508.021 0 L 508.021 -0.5 L 508.021 -1 L 506.025 -1 L 506.025 -0.5 Z M 510.018 -0.5 L 510.018 0 L 512.014 0 L 512.014 -0.5 L 512.014 -1 L 510.018 -1 L 510.018 -0.5 Z M 514.01 -0.5 L 514.01 0 L 516.006 0 L 516.006 -0.5 L 516.006 -1 L 514.01 -1 L 514.01 -0.5 Z M 518.002 -0.5 L 518.002 0 L 519 0 L 519 -0.5 L 519 -1 L 518.002 -1 L 518.002 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Celias, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "var(--color-secondary-950)",
      flexShrink: 0
    }
  }, "14 000 FCFA")))));
}
Object.assign(__ds_scope, { RecapCommande, __ds_default_components_RecapCommande_1lccavd: RecapCommande });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/RecapCommande.jsx", error: String((e && e.message) || e) }); }

// components/forms/AccordionItem.jsx
try { (() => {
function AccordionItem(_p = {}) {
  const props = {
    open: false,
    ..._p
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      borderBottom: "1px solid var(--line-hairline)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: props.onToggle,
    style: {
      width: "100%",
      background: "none",
      border: "none",
      cursor: "pointer",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "24px 0",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--ink)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", null, props.question), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "8",
    viewBox: "0 0 8 4",
    style: {
      flexShrink: 0,
      transform: props.open ? "rotate(180deg)" : "none",
      transition: "transform .2s ease"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 4 L 3.47 4.53 C 3.763 4.823 4.237 4.823 4.53 4.53 L 4 4 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z M 4 4 L 4.53 4.53 L 8.53 0.53 L 8 0 L 7.47 -0.53 L 3.47 3.47 L 4 4 Z",
    fill: "var(--ink)"
  }))), props.open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: "0 0 20px 0",
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--ink)"
    }
  }, props.answer));
}
Object.assign(__ds_scope, { AccordionItem, __ds_default_components_forms_AccordionItem_7qmmxd: AccordionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AccordionItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button(_p = {}) {
  const props = {
    variant: "primary",
    size: "md",
    disabled: false,
    ..._p
  };
  const sizes = {
    md: {
      padding: "20px 30px",
      font: 18
    },
    sm: {
      padding: "14px 24px",
      font: 16
    }
  };
  const s = sizes[props.size] || sizes.md;
  const base = {
    display: "inline-flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: s.padding,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: s.font,
    lineHeight: "28px",
    border: "none",
    cursor: props.disabled ? "not-allowed" : "pointer",
    boxSizing: "border-box",
    transition: "background-color .15s ease, color .15s ease, opacity .15s ease",
    opacity: props.disabled ? 0.4 : 1
  };
  const variants = {
    primary: {
      backgroundColor: "var(--brand-bordeaux)",
      color: "var(--ink-on-dark)"
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--brand-bordeaux)",
      boxShadow: "inset 0 0 0 2px var(--brand-bordeaux)"
    },
    ghost: {
      backgroundColor: "var(--surface-page)",
      color: "var(--ink)",
      fontWeight: 400
    },
    light: {
      backgroundColor: "var(--surface-page)",
      color: "var(--ink)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    className: props.className,
    disabled: props.disabled,
    onClick: props.onClick,
    style: {
      ...base,
      ...variants[props.variant],
      ...props.style
    }
  }, props.children ?? "Bouton");
}
Object.assign(__ds_scope, { Button, __ds_default_components_forms_Button_9f0yek: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox(_p = {}) {
  const props = {
    checked: false,
    ..._p
  };
  return /*#__PURE__*/React.createElement("label", {
    className: props.className,
    style: {
      display: "inline-flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      cursor: "pointer",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      boxSizing: "border-box",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.checked ? "var(--brand-bordeaux)" : "transparent",
      boxShadow: props.checked ? "none" : "inset 0 0 0 1px var(--ink)"
    }
  }, props.checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 11.5 11.258",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 11.258 L 4.646 11.612 L 5.107 12.073 L 5.433 11.508 L 5 11.258 Z M 0 6.258 L -0.354 6.612 L 4.646 11.612 L 5 11.258 L 5.354 10.905 L 0.354 5.905 L 0 6.258 Z M 5 11.258 L 5.433 11.508 L 11.933 0.25 L 11.5 0 L 11.067 -0.25 L 4.567 11.008 L 5 11.258 Z",
    fill: "var(--ink-on-dark)"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--ink)"
    }
  }, props.children));
}
function Radio(_p = {}) {
  const props = {
    checked: false,
    ..._p
  };
  return /*#__PURE__*/React.createElement("label", {
    className: props.className,
    style: {
      display: "inline-flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      cursor: "pointer",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      boxSizing: "border-box",
      flexShrink: 0,
      boxShadow: `inset 0 0 0 2px ${props.checked ? "var(--brand-bordeaux)" : "var(--color-secondary-50)"}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 400,
      fontSize: 12,
      color: "var(--ink)"
    }
  }, props.children));
}
Object.assign(__ds_scope, { Checkbox, Radio, __ds_default_components_forms_Checkbox_i1jt6f: Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input(_p = {}) {
  const props = {
    type: "text",
    ..._p
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      ...props.style
    }
  }, props.label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--ink)"
    }
  }, props.label), /*#__PURE__*/React.createElement("input", {
    type: props.type,
    placeholder: props.placeholder,
    defaultValue: props.defaultValue,
    disabled: props.disabled,
    style: {
      width: "100%",
      height: 60,
      boxSizing: "border-box",
      padding: "16px 20px",
      boxShadow: props.error ? "inset 0 0 0 1px var(--state-error)" : "inset 0 0 0 1px var(--color-secondary-50)",
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--ink)",
      background: props.disabled ? "var(--surface-ivory)" : "var(--surface-page)",
      border: "none",
      outline: "none"
    }
  }), props.error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--state-error)"
    }
  }, props.error));
}
Object.assign(__ds_scope, { Input, __ds_default_components_forms_Input_jsghkw: Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/App.jsx
try { (() => {
const {
  useState
} = React;
const TABS = [["accueil", "Accueil"], ["maison", "La Maison"], ["pieces", "Les Pièces"], ["produit", "Fiche produit"], ["passeport", "Passeport digital"], ["contact", "Contact"], ["panier", "Panier & paiement"], ["connexion", "Connexion"]];
function TopSwitcher({
  current,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      gap: 2,
      flexWrap: "wrap",
      padding: "10px 16px",
      background: "var(--ink)"
    }
  }, TABS.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onChange(id),
    style: {
      background: current === id ? "var(--brand-bordeaux)" : "transparent",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      cursor: "pointer"
    }
  }, label)));
}
function App() {
  const [tab, setTab] = useState("accueil");
  const screens = {
    accueil: window.Screens.Accueil,
    maison: window.Screens.LaMaison,
    pieces: window.Screens.LesPieces,
    produit: window.Screens.FicheProduit,
    passeport: window.Screens.Passeport,
    contact: window.Screens.Contact,
    panier: window.Screens.PanierCheckout,
    connexion: window.Screens.Connexion
  };
  const Screen = screens[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopSwitcher, {
    current: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Screen, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/Accueil.jsx
try { (() => {
window.Screens.Accueil = function Accueil() {
  const {
    Navbar,
    Footer,
    Categoris,
    Button
  } = window.CS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 640,
      background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(../../assets/imagery/hero-cuir-noir.png) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar clair",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      padding: "120px 24px 160px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "clamp(32px,5vw,60px)",
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, "Le cuir ivoirien, sublim\xE9"), /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "D\xE9couvrir la collection"))), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "100px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 50,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 24,
      textAlign: "center",
      maxWidth: 760,
      color: "var(--ink)"
    }
  }, "N\xE9e \xE0 Abidjan, la Maison Carole Sessegnon travaille le cuir ivoirien pi\xE8ce par pi\xE8ce, \xE0 la main."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%"
    }
  }, ["Sacs", "Pochettes", "Maroquineries"].map(t => /*#__PURE__*/React.createElement(Categoris, {
    key: t,
    text1: t,
    style: {
      width: 320,
      height: 420,
      flex: "1 1 300px"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 480,
      background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url(../../assets/imagery/hero-atelier-wide.png) center/cover no-repeat`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      textAlign: "center",
      padding: "60px 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "clamp(24px,4vw,40px)",
      color: "#fff"
    }
  }, "Collection de Septembre 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "D\xE9couvrir la collection")), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/Accueil.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/Connexion.jsx
try { (() => {
window.Screens.Connexion = function Connexion() {
  const {
    Navbar,
    Footer,
    Input,
    Button,
    Checkbox,
    ContinueWithGoogleLeftAligned,
    ContinueWithAppleLeftAligned
  } = window.CS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "60px 24px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 44,
      color: "var(--ink)",
      letterSpacing: "-0.02em"
    }
  }, "Connectez-vous"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(560px,100%)",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(ContinueWithGoogleLeftAligned, {
    style: {
      flex: "1 1 220px"
    }
  }), /*#__PURE__*/React.createElement(ContinueWithAppleLeftAligned, {
    style: {
      flex: "1 1 220px"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      textAlign: "center",
      color: "var(--ink)"
    }
  }, "Ou"), /*#__PURE__*/React.createElement(Input, {
    label: "Email ou num\xE9ro de t\xE9l\xE9phone",
    placeholder: "Saisir"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mot de passe",
    type: "password",
    placeholder: "Saisir"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true
  }, "Se souvenir de moi"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Se connecter"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 24,
      color: "var(--ink)",
      marginTop: 20
    }
  }, "Pas de compte ?"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Cr\xE9er un compte"))), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/Connexion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/Contact.jsx
try { (() => {
window.Screens.Contact = function Contact() {
  const {
    Navbar,
    Footer,
    Button
  } = window.CS;
  const {
    useState
  } = React;
  const [open, setOpen] = useState(0);
  const methods = [["Téléphone", "Appelez-nous"], ["Chat en direct", "Envoyez-nous un message"], ["Email", "Écrivez-nous"]];
  const faqs = [["Comment puis-je contacter la Maison Carole Sessegnon ?", "Chaque pièce de la Maison est confectionnée à la main à partir de cuir ivoirien sélectionné avec soin. Pour toute question, notre équipe est disponible par email ou via nos réseaux sociaux. Nous nous engageons à vous répondre sous 48 heures."], ["Comment puis-je en savoir plus sur le cuir ivoirien utilisé ?", ""], ["Proposez-vous des commandes sur mesure ?", ""], ["Puis-je visiter votre atelier à Abidjan ?", ""]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "60px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 40,
      color: "var(--ink)"
    }
  }, "Nous sommes \xE0 votre \xE9coute, avec le m\xEAme soin que nous portons \xE0 chaque pi\xE8ce."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)",
      maxWidth: 700
    }
  }, "Nous sommes \xE0 votre disposition pour toute demande. N'h\xE9sitez pas \xE0 nous contacter du lundi au samedi, de 9h \xE0 19h, hors jours f\xE9ri\xE9s.")), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "0 24px 60px",
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, methods.map(([t, cta]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: "1 1 260px",
      maxWidth: 320,
      background: "var(--surface-page)",
      padding: 30,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.08em",
      color: "var(--ink-muted)"
    }
  }, t.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 22,
      color: "var(--ink)"
    }
  }, cta)))), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "0 24px 80px",
      display: "flex",
      gap: 60,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 380px",
      maxWidth: 460,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/atelier-mains.jpg",
    style: {
      width: "100%",
      aspectRatio: "537/600",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 28,
      color: "var(--ink)"
    }
  }, "Rendez-vous en boutique"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)"
    }
  }, "R\xE9servez un rendez-vous priv\xE9 avec nos conseillers en boutique pour d\xE9couvrir la nouvelle collection."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: "100%"
    }
  }, "R\xE9server un rendez-vous en boutique")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 460px",
      maxWidth: 620,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 28,
      color: "var(--ink)",
      textAlign: "center",
      marginBottom: 12
    }
  }, "Foire aux questions"), faqs.map(([q, a], i) => /*#__PURE__*/React.createElement(window.CS.AccordionItem, {
    key: q,
    question: q,
    answer: a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/FicheProduit.jsx
try { (() => {
window.Screens.FicheProduit = function FicheProduit() {
  const {
    Navbar,
    Footer,
    CardProduit,
    Button
  } = window.CS;
  const {
    useState
  } = React;
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(0);
  const faqs = [["Détails & Matières", "Cuir de vachette pleine fleur à tannage végétal issu de tanneries locales de Côte d'Ivoire. Doublure intérieure en agneau velouté. Pièces métalliques en laiton brossé. Signature de la Maison marquée à chaud à l'or fin."], ["Dimensions & Porté", "28 × 20 × 10 cm — porté épaule ou main, bandoulière amovible."], ["Livraison et retours", "Livraison à domicile ou retrait en boutique à Abidjan. Retours acceptés sous 14 jours, pièce non portée."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "50px 24px",
      display: "flex",
      gap: 60,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 420px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/produit-sac-principal.png",
    style: {
      width: "100%",
      aspectRatio: "700/800",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["produit-sac-thumb-1.png", "produit-sac-thumb-2.png", "produit-sac-thumb-3.png"].map(f => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: `../../assets/imagery/${f}`,
    style: {
      width: 70,
      height: 70,
      objectFit: "cover"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 420px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 32,
      color: "var(--ink)"
    }
  }, "Sac Abidjan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      color: "var(--ink)",
      marginTop: 6
    }
  }, "185 000 FCFA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink)"
    }
  }, "Teinte : Noir \xC9b\xE8ne"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, ["#101010", "#471d1b", "#b17345"].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: c,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,.2)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 15,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16
    }
  }, "Quantit\xE9"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: {
      width: 34,
      height: 34,
      border: "1px solid var(--ink)",
      background: "none",
      cursor: "pointer"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 22
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: {
      width: 34,
      height: 34,
      border: "1px solid var(--ink)",
      background: "none",
      cursor: "pointer"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    }
  }, "Ajouter au panier \u2014 185 000 FCFA"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Acheter maintenant")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-muted)"
    }
  }, "* Ce produit dispose d'un Passeport Digital d'authenticit\xE9 unique accessible d\xE8s sa r\xE9ception."), /*#__PURE__*/React.createElement("div", null, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement(window.CS.AccordionItem, {
    key: q,
    question: q,
    answer: a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }))))), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "40px 24px 90px",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 32,
      color: "var(--ink)"
    }
  }, "Vous aimerez aussi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, ["Pochette Cocody", "Ceinture Treichville", "Portefeuille Marcory"].map(n => /*#__PURE__*/React.createElement(CardProduit, {
    key: n,
    text1: n,
    text2: "95 000 FCFA",
    style: {
      width: 280,
      height: "auto"
    }
  })))), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/FicheProduit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/LaMaison.jsx
try { (() => {
window.Screens.LaMaison = function LaMaison() {
  const {
    Navbar,
    Footer,
    Button
  } = window.CS;
  const Block = ({
    title,
    text,
    img,
    reverse
  }) => /*#__PURE__*/React.createElement(window.Section, {
    style: {
      display: "flex",
      gap: 60,
      alignItems: "center",
      flexWrap: "wrap",
      flexDirection: reverse ? "row-reverse" : "row",
      padding: "70px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    style: {
      flex: "1 1 420px",
      minWidth: 300,
      aspectRatio: "7/6",
      objectFit: "cover",
      boxShadow: "0 12px 24px -8px var(--shadow-color)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 380px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement(window.Eyebrow, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      lineHeight: "30px",
      color: "var(--ink)"
    }
  }, text)));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 420,
      background: `linear-gradient(108.71deg, rgba(71,29,27,.35), rgba(71,29,27,.55)), url(../../assets/imagery/hero-atelier-wide.png) center/cover no-repeat`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
      textAlign: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 56,
      letterSpacing: "-0.02em"
    }
  }, "La Maison"), /*#__PURE__*/React.createElement(window.Eyebrow, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 18,
      maxWidth: 600
    }
  }, "Une Maison ivoirienne de maroquinerie, o\xF9 chaque pi\xE8ce na\xEEt d'un geste pr\xE9cis et d'une exigence sans compromis."))), /*#__PURE__*/React.createElement(Block, {
    title: "Notre histoire",
    img: "../../assets/imagery/hero-cuir-noir.png",
    text: "Fond\xE9e en 2026, CAROLE SESSEGNON est n\xE9e d'une conviction simple : que la maroquinerie ivoirienne m\xE9rite la m\xEAme exigence que les grandes Maisons. Depuis Abidjan, chaque pi\xE8ce est pens\xE9e, dessin\xE9e et fa\xE7onn\xE9e avec le soin que l'on r\xE9serve aux objets rares."
  }), /*#__PURE__*/React.createElement(Block, {
    title: "Savoir-faire",
    reverse: true,
    img: "../../assets/imagery/savoir-faire-detail.jpg",
    text: "L'exigence du geste. Chaque pi\xE8ce est travaill\xE9e \xE0 la main, dans le respect des techniques de la maroquinerie. Le choix des mati\xE8res \u2014 cuirs s\xE9lectionn\xE9s pour leur qualit\xE9 et leur origine \u2014 r\xE9pond \xE0 une seule r\xE8gle : ne jamais transiger sur l'excellence."
  }), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "70px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/portrait-carole-sessegnon.png",
    style: {
      width: "min(600px,90%)",
      aspectRatio: "690/609",
      objectFit: "cover",
      boxShadow: "0 12px 24px -8px var(--shadow-color)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 44,
      letterSpacing: "-0.02em"
    }
  }, "Portrait \u2014 Carole Sessegnon"), /*#__PURE__*/React.createElement(window.Eyebrow, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      lineHeight: "30px",
      maxWidth: 620
    }
  }, "[Biographie \xE0 recueillir aupr\xE8s de la Maison : parcours, ce qui a motiv\xE9 la cr\xE9ation de la Maison, sa vision.]")), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "20px 24px 90px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 44,
      letterSpacing: "-0.02em"
    }
  }, "Les Sentinelles de la Maison"), /*#__PURE__*/React.createElement(window.Eyebrow, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 20,
      lineHeight: "30px",
      maxWidth: 700
    }
  }, "Elles veillent sur chaque pi\xE8ce, du registre \xE0 la v\xE9rification de son authenticit\xE9. Les Sentinelles de la Maison accompagnent le client tout au long de son parcours avec le passeport digital \u2014 gardiennes silencieuses des archives et de l'histoire de chaque pi\xE8ce."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 88,
      height: 88,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px var(--color-secondary-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--brand-bordeaux)"
    }
  }, "CS"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-muted)"
    }
  }, "Illustrations des Sentinelles \xE0 fournir par la Maison \u2014 placeholders monogramme ci-dessus."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Voir les pi\xE8ces")), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/LaMaison.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/LesPieces.jsx
try { (() => {
window.Screens.LesPieces = function LesPieces() {
  const {
    Navbar,
    Footer,
    CardProduit,
    Button,
    Checkbox,
    Radio
  } = window.CS;
  const items = [["Sac Abidjan", "185 000 FCFA", "default card"], ["Pochette Cocody", "95 000 FCFA", "default card"], ["Ceinture Treichville", "62 000 FCFA", "hover"], ["Sac Yamoussoukro", "210 000 FCFA", "variant3"], ["Pochette Bingerville", "78 000 FCFA", "default card"], ["Portefeuille Marcory", "54 000 FCFA", "default card"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      padding: "25px clamp(20px,5vw,140px)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Type de pi\xE8ce : Toutes les pi\xE8ces"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Filtrer")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      padding: "40px clamp(20px,5vw,140px)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      display: "none"
    },
    className: "filters-desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      justifyContent: "center"
    }
  }, items.map(([n, p, v]) => /*#__PURE__*/React.createElement(CardProduit, {
    key: n,
    property1: v,
    text1: n,
    text2: p,
    style: {
      width: 300,
      height: "auto"
    }
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 280,
      flexShrink: 0,
      background: "var(--surface-page)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Filtrer par :"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Cat\xE9gories"), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true
  }, "Sacs (450)"), /*#__PURE__*/React.createElement(Checkbox, null, "Pochettes (18)")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px dashed var(--line-dashed)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Disponibilit\xE9s"), /*#__PURE__*/React.createElement(Radio, {
    checked: true
  }, "Disponible (18)"), /*#__PURE__*/React.createElement(Radio, null, "En rupture de stock (450)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "R\xE9initialiser"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Appliquer")))), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/LesPieces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/PanierCheckout.jsx
try { (() => {
window.Screens.PanierCheckout = function PanierCheckout() {
  const {
    Navbar,
    CardProduit,
    Button,
    Input,
    RecapCommande
  } = window.CS;
  const {
    useState
  } = React;
  const [mode, setMode] = useState("panier");
  const [checkoutStep, setCheckoutStep] = useState(0);
  const cart = [["Sac Abidjan", "185 000 FCFA"], ["Pochette Cocody", "95 000 FCFA"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      padding: "20px clamp(20px,5vw,140px) 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode("panier"),
    style: {
      background: mode === "panier" ? "var(--brand-bordeaux)" : "var(--surface-page)",
      color: mode === "panier" ? "#fff" : "var(--ink)",
      border: "none",
      padding: "10px 20px",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, "Panier"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode("checkout"),
    style: {
      background: mode === "checkout" ? "var(--brand-bordeaux)" : "var(--surface-page)",
      color: mode === "checkout" ? "#fff" : "var(--ink)",
      border: "none",
      padding: "10px 20px",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, "Paiement")), mode === "panier" ? /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "40px 24px 90px",
      display: "flex",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "2 1 500px",
      display: "flex",
      flexWrap: "wrap",
      gap: 20
    }
  }, ["Sac Abidjan", "Pochette Cocody", "Ceinture Treichville"].map(n => /*#__PURE__*/React.createElement(CardProduit, {
    key: n,
    text1: n,
    text2: "120 000 FCFA",
    style: {
      width: 260,
      height: "auto"
    }
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: "1 1 340px",
      maxWidth: 400,
      background: "var(--surface-page)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Panier"), cart.map(([n, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", null, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px dashed var(--line-dashed)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total panier"), /*#__PURE__*/React.createElement("span", null, "280 000 FCFA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    }
  }, "Voir le panier"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    },
    onClick: () => setMode("checkout")
  }, "Passez la commande")))) : /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "40px 24px 90px",
      display: "flex",
      gap: 60,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "2 1 500px",
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, ["Livraison", "Mode de paiement", "Confirmation"].map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setCheckoutStep(i),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: i === checkoutStep ? 24 : 18,
      fontWeight: i === checkoutStep ? 700 : 400,
      color: i === checkoutStep ? "var(--ink)" : "var(--ink-muted)"
    }
  }, s))), checkoutStep === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 20,
      color: "var(--ink)"
    }
  }, "Comment souhaitez-vous recevoir votre commande ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 15,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      flex: "1 1 240px",
      background: "var(--surface-ivory)",
      boxShadow: "inset 0 0 0 2px var(--brand-bordeaux)",
      padding: 20,
      display: "flex",
      gap: 12,
      alignItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--brand-bordeaux)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "Livraison \xE0 votre adresse"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16
    }
  }, "\xC0 partir de 2 000 FCFA"))), /*#__PURE__*/React.createElement("label", {
    style: {
      flex: "1 1 240px",
      boxShadow: "inset 0 0 0 1px var(--color-secondary-50)",
      padding: 20,
      display: "flex",
      gap: 12,
      alignItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--color-secondary-50)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "Retrait en boutique"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16
    }
  }, "Gratuite"))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 32,
      color: "var(--ink)"
    }
  }, "Coordonn\xE9es"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 15,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Adresse email",
    placeholder: "exemple@domain.com",
    style: {
      flex: "1 1 240px"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "T\xE9l\xE9phone",
    placeholder: "+225 07 00 00 00 00",
    style: {
      flex: "1 1 240px"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 20,
      color: "var(--ink)"
    }
  }, "Adresse de livraison"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 15,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom",
    placeholder: "Fols",
    style: {
      flex: "1 1 240px"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Pr\xE9noms",
    placeholder: "Biran",
    style: {
      flex: "1 1 240px"
    }
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Adresse",
    placeholder: "RUE F17",
    style: {
      marginTop: 20
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setCheckoutStep(1)
  }, "Continuer vers le paiement")), checkoutStep === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 20,
      color: "var(--ink)"
    }
  }, "Mode de paiement"), ["Carte bancaire", "Mobile Money", "Virement"].map(m => /*#__PURE__*/React.createElement("label", {
    key: m,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      padding: 16,
      boxShadow: "inset 0 0 0 1px var(--color-secondary-50)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px var(--color-secondary-50)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16
    }
  }, m))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setCheckoutStep(2)
  }, "Confirmer et payer")), checkoutStep === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      textAlign: "center",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      color: "var(--ink)"
    }
  }, "Merci pour votre commande"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--ink)"
    }
  }, "Un email de confirmation vous a \xE9t\xE9 envoy\xE9. Votre Passeport digital sera activable d\xE8s r\xE9ception."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: "1 1 340px",
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement(RecapCommande, {
    text2: "Sac Abidjan",
    text3: "Mati\xE8re : Cuir ivoirien d'exception",
    text4: "185 000 FCFA",
    style: {
      width: "100%"
    }
  }))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/PanierCheckout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/Passeport.jsx
try { (() => {
window.Screens.Passeport = function Passeport() {
  const {
    Navbar,
    Footer,
    Button,
    Input
  } = window.CS;
  const {
    useState
  } = React;
  const [step, setStep] = useState(0);
  const steps = ["Activation", "Vérification", "Affichage", "Association"];
  const Sentinelle = ({
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px var(--brand-bordeaux)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 18,
      color: "var(--brand-bordeaux)"
    }
  }, "CS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-muted)",
      textAlign: "center",
      maxWidth: 140
    }
  }, label));
  const panels = [{
    title: "Activation du Passeport",
    body: "Scannez le sceau numéroté à l'intérieur de votre pièce, ou saisissez son numéro de série pour activer son Passeport digital.",
    sentinel: "La Sentinelle du Registre ouvre le dossier de votre pièce.",
    form: /*#__PURE__*/React.createElement(Input, {
      label: "Num\xE9ro de s\xE9rie",
      placeholder: "CS-2026-000147"
    })
  }, {
    title: "Vérification d'authenticité",
    body: "Chaque élément — cuir, ferrure, signature à l'or fin — est comparé aux archives de l'atelier avant de confirmer l'authenticité de la pièce.",
    sentinel: "La Sentinelle du Cuir examine la pièce, geste par geste.",
    form: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, ["Cuir d'origine confirmé", "Ferrure d'atelier confirmée", "Signature à l'or fin confirmée"].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--brand-bordeaux)"
      }
    }), t)))
  }, {
    title: "Affichage du Passeport",
    body: "Numéro de pièce, date de façon, atelier et propriétaire actuel — l'histoire complète de l'objet, consultable à tout moment.",
    sentinel: "La Sentinelle des Archives présente le dossier complet.",
    form: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Pi\xE8ce N\xB0 CS-2026-000147"), /*#__PURE__*/React.createElement("span", null, "Fa\xE7onn\xE9e \xE0 Abidjan \u2014 Septembre 2026"), /*#__PURE__*/React.createElement("span", null, "Propri\xE9taire actuel : vous"))
  }, {
    title: "Association à votre profil",
    body: "Reliez ce Passeport à votre compte pour en conserver l'historique, le transférer un jour, ou le présenter en cas de revente.",
    sentinel: "La Sentinelle du Seuil scelle l'association à votre nom.",
    form: /*#__PURE__*/React.createElement(Input, {
      label: "Confirmer avec votre compte",
      placeholder: "exemple@domain.com"
    })
  }];
  const p = panels[step];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    property1: "navbar default",
    style: {
      width: "100%",
      height: "auto",
      padding: "20px clamp(20px,5vw,140px)"
    }
  }), /*#__PURE__*/React.createElement(window.Section, {
    style: {
      padding: "60px 24px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 44,
      color: "var(--ink)",
      letterSpacing: "-0.02em"
    }
  }, "Passeport digital"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setStep(i),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: i === step ? "var(--ink)" : "var(--ink-muted)",
      fontWeight: i === step ? 700 : 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      boxShadow: `inset 0 0 0 2px ${i === step ? "var(--brand-bordeaux)" : "var(--color-secondary-100)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12
    }
  }, i + 1), s))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(720px,100%)",
      background: "var(--surface-page)",
      padding: "50px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Sentinelle, {
    label: p.sentinel
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 28,
      color: "var(--ink)"
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: "28px",
      color: "var(--ink)"
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 400,
      textAlign: "left"
    }
  }, p.form), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(step - 1)
  }, "Pr\xE9c\xE9dent"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(Math.min(3, step + 1))
  }, step === 3 ? "Terminer" : "Continuer"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-muted)",
      maxWidth: 500,
      textAlign: "center"
    }
  }, "Les Sentinelles de la Maison sont un motif narratif et graphique \u2014 ce parcours est original (non pr\xE9sent dans les maquettes fournies) et attend ses illustrations d\xE9finitives.")), /*#__PURE__*/React.createElement(Footer, {
    style: {
      width: "100%",
      height: "auto",
      padding: "85px clamp(20px,5vw,140px)"
    }
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/Passeport.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Screens/shared.jsx
try { (() => {
const DS = window.CaroleSessegnonDesignSystem_d86b2c;
const {
  Navbar,
  Footer,
  Logo,
  CardProduit,
  Categoris,
  Button,
  Input,
  Checkbox,
  Radio,
  AccordionItem,
  RecapCommande,
  ContinueWithGoogleLeftAligned,
  ContinueWithAppleLeftAligned
} = DS;
window.CS = {
  Navbar,
  Footer,
  Logo,
  CardProduit,
  Categoris,
  Button,
  Input,
  Checkbox,
  Radio,
  AccordionItem,
  RecapCommande,
  ContinueWithGoogleLeftAligned,
  ContinueWithAppleLeftAligned
};
window.Screens = window.Screens || {};
window.Section = function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      padding: "0 24px",
      ...style
    }
  }, children);
};
window.Eyebrow = function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 2,
      background: "var(--brand-blush)",
      margin: "16px 0"
    }
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Screens/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CardProduit = __ds_scope.CardProduit;

__ds_ns.Categoris = __ds_scope.Categoris;

__ds_ns.ContinueWithAppleLeftAligned = __ds_scope.ContinueWithAppleLeftAligned;

__ds_ns.ContinueWithGoogleLeftAligned = __ds_scope.ContinueWithGoogleLeftAligned;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.RecapCommande = __ds_scope.RecapCommande;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

})();
