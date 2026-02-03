{% comment %}
  ALTA REALEZA WIDGET - V50.7 (FINAL CALIBRATED: ARIEL'S COORDINATES + NO EMOJI)
{% endcomment %}

<svg style="display: none;">
  <symbol id="icon-upload" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/></symbol>
  <symbol id="icon-sparkles" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L9.2 9.2L2 12l7.2 2.8L12 22l2.8-7.2L22 12l-7.2-2.8L12 2zM6 16l-1.2 3.2L1.5 20.5L4.8 21.7L6 25l1.2-3.2l3.2-1.2l-3.2-1.2L19 16z"/></symbol>
  <symbol id="icon-picture" viewBox="0 0 24 24"><path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></symbol>
  <symbol id="icon-check" viewBox="0 0 24 24"><path fill="var(--gold)" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol>
  <symbol id="icon-plus" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></symbol>
  <symbol id="icon-trash" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></symbol>
  <symbol id="icon-refresh" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></symbol>
  <symbol id="icon-check-green" viewBox="0 0 24 24"><path fill="#28a745" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol>
  <symbol id="icon-truck" viewBox="0 0 24 24"><path fill="#28a745" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></symbol>
  <symbol id="icon-chevron-down" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></symbol>
  <symbol id="icon-arrow-left" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></symbol>
  <symbol id="icon-frame" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-2-2H7V7h10v10z"/></symbol>
</svg>

<div class="realeza-wrapper">
  <div class="realeza-container page-width">
    
    <div id="main-header-block">
        <div class="steps-nav">
          <span class="step active">1. Subir fotos</span>
          <span class="separator">→</span>
          <span class="step" id="step-preview">2. Previsualizar</span>
          <span class="separator">→</span>
          <span class="step" id="step-buy">3. Elegir Formato</span>
        </div>

        <div class="realeza-header">
          <h2 class="realeza-title">Inmortaliza a tu mascota en una obra maestra eterna</h2>
          <p class="realeza-price-hook">Vista previa gratuita. Desde L. 149. <span style="color: var(--gold); font-weight:bold;">Envíos a toda Honduras.</span></p>
        </div>
    </div>

    <div id="back-to-edit-bar" style="display:none; margin-top: -60px; margin-bottom: -50px; text-align: left; position: relative; z-index: 10;">
        <button type="button" onclick="backToEditor()" style="background:none; border:none; color:#999; cursor:pointer; display:inline-flex; align-items:center; gap:8px; font-size:15px; padding: 10px 0;">
            <svg class="icon-svg" style="width:18px;"><use xlink:href="#icon-arrow-left"></use></svg> <span style="border-bottom: 1px solid #999;">Volver y editar fotos</span>
        </button>
    </div>

    <div class="realeza-main-layout" id="main-layout">
      <div class="realeza-controls" id="controls-section">
        <div class="upload-section">
            <div class="fable-dropzone" id="dropzone-area" onclick="triggerFileInput()">
                <input type="file" id="pet-photo" accept="image/*" multiple class="file-input-hidden" onchange="handleNewFiles(this)">
                <div id="upload-placeholder" style="width: 100%; text-align: center;">
                    <div style="position:relative; display:inline-block;">
                        <svg class="icon-svg icon-large"><use xlink:href="#icon-upload"></use></svg>
                        <div class="plus-badge"><svg class="icon-svg" style="width:12px; height:12px; color:black;"><use xlink:href="#icon-plus"></use></svg></div>
                    </div>
                    <p class="upload-instruction-title">Sube una foto por cada mascota</p>
                    <p class="upload-instruction-desc">Foto bien iluminada: cara completa (orejas + hocico visibles)</p>
                </div>
                <div id="preview-container" style="display:none; width:100%;">
                      <div id="preview-grid" class="preview-grid"></div>
                      <div class="files-manage-bar">
                        <span id="file-counter">0 fotos</span>
                        <button type="button" id="clear-all-btn" onclick="clearAllFiles(event)">
                            <svg class="icon-svg" style="width:10px; height:10px; margin-right:4px;"><use xlink:href="#icon-trash"></use></svg> Vaciar todo
                        </button>
                      </div>
                </div>
            </div>
        </div>

        <div class="control-group" style="margin-top: 30px;">
          <label class="step-label">Elige la estética de la obra:</label>
          <input type="hidden" id="selected-style-value" value="renacimiento">
          
          <div id="style-trigger" class="style-trigger-box" onclick="openStyleModal()">
              <div class="trigger-content">
                  <img id="trigger-icon" src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798632501_489t1osbz.jpg?v=1769798690" class="trigger-thumb">
                  <div class="trigger-info">
                      <span class="trigger-title" id="trigger-title-display">Elegancia de Museo</span>
                      <span class="trigger-desc" id="trigger-desc-display">Luz suave, tonos nobles y acabado fino.</span>
                  </div>
              </div>
              <svg class="icon-svg" style="color:#666; width: 18px; height: 18px;"><use xlink:href="#icon-chevron-down"></use></svg>
          </div>
        </div>

        <button type="button" id="generate-btn" class="btn-gold" onclick="generateImage()">
          <svg class="icon-svg icon-btn"><use xlink:href="#icon-sparkles"></use></svg> <span id="btn-text">CREAR OBRA MAESTRA</span>
        </button>
        
        <div id="loading-area" style="display:none; margin-top: 25px;">
          <p id="loading-text" class="loading-text">Conectando con el atelier...</p>
          <div class="progress-bar-bg"><div id="progress-bar-fill" class="progress-bar-fill"></div></div>
          <p id="loading-seconds" style="text-align: center; color: #666; font-size: 12px; margin-top: 8px;">~60 segundos restantes</p>
        </div>
      </div>

      <div class="realeza-canvas" id="canvas-section" style="display:none;">
        <div id="placeholder-art" class="placeholder-box">
          <svg class="icon-svg icon-huge placeholder-icon"><use xlink:href="#icon-picture"></use></svg>
          <p style="opacity: 0.5; margin-top: 20px;">Tu obra maestra aparecerá aquí</p>
        </div>
        
        <div id="result-container" style="display:none;">
            <p class="success-msg">¡Tu obra maestra está lista!</p>
            
            <div class="frame-toggle-bar">
                <button type="button" class="toggle-btn active" onclick="setMode('canvas')" id="btn-canvas">
                    <span>Lienzo</span>
                </button>
                <button type="button" class="toggle-btn" onclick="setMode('frame')" id="btn-frame">
                    <span>Enmarcado</span>
                </button>
                <button type="button" class="toggle-btn" onclick="setMode('real')" id="btn-real">
                    <span>En Casa</span>
                </button>
            </div>

            <div id="art-display-wrapper" class="art-display-wrapper mode-canvas">
                
                <div class="watermark-container normal-view-layer">
                    <div class="frame-overlay-layer"></div>
                    <div id="artwork-content-box">
                        <div class="watermark-overlay">
                            {% assign wm_url = 'https://cdn.shopify.com/s/files/1/0800/3089/2275/files/Alta_Nobleza_1_5d31d289-329c-4c43-9352-a40b49d85711.png?v=1769720438' %}
                            <img src="{{ wm_url }}" class="wm-logo wm-p1"><img src="{{ wm_url }}" class="wm-logo wm-p2"><img src="{{ wm_url }}" class="wm-logo wm-p3">
                            <img src="{{ wm_url }}" class="wm-logo wm-p4"><img src="{{ wm_url }}" class="wm-logo wm-p5"><img src="{{ wm_url }}" class="wm-logo wm-p6">
                            <img src="{{ wm_url }}" class="wm-logo wm-p7"><img src="{{ wm_url }}" class="wm-logo wm-p8"><img src="{{ wm_url }}" class="wm-logo wm-p9">
                        </div>
                        <img id="result-image" src="" class="final-image">
                    </div>
                </div>

                <div class="real-view-layer" style="display:none;">
                    <img src="https://cdn.shopify.com/s/files/1/0338/8581/4917/files/oie_transparent_4.png?v=1770147593" class="real-scene-overlay">
                    
                    <div class="art-spot art-spot-wall"></div>
                    
                    <div class="art-spot art-spot-desk"></div>
                </div>

            </div>
            
            <div id="buy-section" class="buy-box">
              <p style="font-size:11px; color:#888; margin-top: 10px; margin-bottom: 20px; text-align:center;">*La marca de agua se elimina tras la compra.</p>
              
              <div class="pricing-card digital-tier">
                <div class="card-header">
                  <div><span class="badge-highlight badge-popular">★ MÁS POPULAR</span><h3>Descarga Instantánea</h3></div>
                  <div class="price-block"><span class="price">L149</span><div class="timer-badge">Expira: <span id="countdown-timer">15:00</span></div></div>
                </div>
                <p class="card-desc">Descarga inmediata en alta resolución — ideal para compartir.</p>
                <ul class="features-list">
                  <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Descarga en alta resolución</li>
                  <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Sin marca de agua</li>
                  <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Listo para imprimir con calidad</li>
                </ul>
                <button class="btn-checkout" onclick="addDigitalToCart(this)">COMPRAR DESCARGA DIGITAL</button>
              </div>

               <div class="pricing-card">
                 <div class="card-header"><h3>Impresión Pequeña de Arte</h3><span class="price" id="price-small">L249</span></div>
                 <p class="card-desc">Impreso en papel de archivo de calidad museo con tintas resistentes al desvanecimiento.</p>
                 <div style="margin: 15px 0;">
                    <label class="step-label" style="font-size:10px;">Elige tamaño:</label>
                    <select id="small-size-select" class="gold-dropdown small-dropdown" onchange="updatePrices()">
                        <option value="48447180800243">8" x 10"</option><option value="48447180833011">12" x 16"</option>
                    </select>
                 </div>
                 <ul class="features-list">
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Papel de archivo de calidad museo</li>
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Tintas resistentes al desvanecimiento</li>
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Hecho para durar décadas</li>
                   <div class="shipping-compact">
                       <div class="ship-item"><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-truck"></use></svg> <span><strong>Envío (L 100)</strong></span></div>
                       <div class="ship-divider">|</div>
                       <div class="ship-item"><span>5-9 días</span></div>
                   </div>
                   <li style="margin-top: 10px;"><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> <strong>Incluye descarga digital</strong></li>
                 </ul>
                 <button class="btn-checkout btn-dark" onclick="addSmallPrintToCart(this)">COMPRAR IMPRESIÓN PEQUEÑA</button>
              </div>

              <div class="pricing-card">
                 <div class="card-header">
                   <div><span class="badge-highlight badge-gift">🎁 REGALO PERFECTO</span><h3>Impresión Grande de Obra Maestra</h3></div>
                   <span class="price" id="price-large">L699</span>
                 </div>
                 <p class="card-desc">Impresión de gran formato en calidad de galería. El regalo de lujo definitivo y la pieza central perfecta para cualquier hogar.</p>
                 <div style="margin: 15px 0;">
                    <label class="step-label" style="font-size:10px;">Elige tamaño:</label>
                    <select id="large-size-select" class="gold-dropdown small-dropdown" onchange="updatePrices()">
                        <option value="48447180865779">18" x 24"</option>
                        <option value="48447180898547">24" x 36"</option>
                        <option value="48447180931315">40" x 60"</option>
                    </select>
                 </div>
                 <ul class="features-list">
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Listo para colgar</li>
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Cuadro de alta calidad y gran durabilidad</li>
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Tintas resistentes al desvanecimiento</li>
                   <li><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> Hecho para durar décadas</li>
                   <div class="shipping-compact">
                       <div class="ship-item"><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-truck"></use></svg> <span><strong>Envío (L 100)</strong></span></div>
                       <div class="ship-divider">|</div>
                       <div class="ship-item"><span>5-9 días</span></div>
                   </div>
                   <li style="margin-top: 10px;"><svg class="icon-svg icon-small icon-check-green"><use xlink:href="#icon-check-green"></use></svg> <strong>Incluye descarga digital</strong></li>
                 </ul>
                 <button class="btn-checkout btn-dark" onclick="addLargePrintToCart(this)">COMPRAR IMPRESIÓN GRANDE</button>
              </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center; padding-top: 20px; border-top: 1px solid #222;">
                <p style="color:#666; font-size:12px; margin-bottom:15px;">¿No es lo que esperabas?</p>
                <button type="button" onclick="openResetModal()" style="background:none; border:1px solid #444; color:#888; padding:10px 20px; cursor:pointer; border-radius:6px; transition:0.3s; display: inline-flex; align-items: center; font-size:13px;">
                    <svg class="icon-svg" style="width:14px; height:14px; margin-right:8px; color:#888;"><use xlink:href="#icon-refresh"></use></svg>
                    <span>Generar otra versión</span>
                </button>
            </div>
        </div>
      </div>
    </div>

    <div class="realeza-gallery-section" id="bottom-gallery">
        <div class="gallery-container">
            <div class="gallery-track">
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798442260_ag0184oe7.jpg?v=1769798626"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798632501_489t1osbz.jpg?v=1769798690"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798522878_3yl1gi8lh.jpg?v=1769798652"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799418667_s8bhqbfvc.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799348652_xmqstriz7.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799239536_c02qt05gu.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798522878_3yl1gi8lh_f49294ae-b70a-4e65-83b9-c35c90819a6c.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799122322_fffof27q0.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799291001_dv5xq2rz7.jpg?v=1769799599"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798848595_j11bbb7fv.jpg?v=1769799590"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799170170_pn7uzotva.jpg?v=1769799599"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799204423_qnip5hxq6.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798442260_ag0184oe7_f94f0219-8e02-4ea4-917f-d415c9c83c8c.jpg?v=1769799599"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V65_NO_FRAME_1769799493788_yeje0t9ia.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798202351_5nct2ldz7.jpg?v=1769799598"></div>
                <div class="gallery-slide"><img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769760771524_qjoow7azp.jpg?v=1769799599"></div>
            </div>
        </div>
    </div>

  </div> </div> <div id="style-modal" class="custom-modal-overlay" onclick="closeStyleModal(event)">
    <div class="style-modal-content">
        <div class="modal-header"><h3>Elige la estética de la obra</h3><span class="close-modal" onclick="closeStyleModal(null)">×</span></div>
        <div class="style-options-list">
            <div class="style-card" onclick="selectStyle('renacimiento', 'Elegancia de Museo', 'Luz suave, tonos nobles y acabado fino.', 'https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798632501_489t1osbz.jpg?v=1769798690')">
                <img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798632501_489t1osbz.jpg?v=1769798690" class="style-thumb">
                <div class="style-info"><h4>Elegancia de Museo</h4><p>Luz suave, tonos nobles y acabado fino.</p>
                <div class="style-colors"><span style="background:#4169E1"></span><span style="background:#F0EAD6"></span><span style="background:#704214"></span></div></div>
            </div>
            
            <div class="style-card" onclick="selectStyle('rey', 'Coronación Imperial', 'Trono, joyas y presencia majestuosa.', 'https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798442260_ag0184oe7.jpg?v=1769798626')">
                <img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798442260_ag0184oe7.jpg?v=1769798626" class="style-thumb">
                <div class="style-info"><h4>Coronación Imperial</h4><p>Trono, joyas y presencia majestuosa.</p>
                <div class="style-colors"><span style="background:#FFD700"></span><span style="background:#800080"></span><span style="background:#C8102E"></span></div></div>
            </div>

            <div class="style-card" onclick="selectStyle('barroco', 'Teatro Barroco', 'Sombras profundas, contraste y drama.', 'https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798522878_3yl1gi8lh.jpg?v=1769798652')">
                <img src="https://cdn.shopify.com/s/files/1/0800/3089/2275/files/MASTER_V64_SURREALISM_STYLE_1769798522878_3yl1gi8lh.jpg?v=1769798652" class="style-thumb">
                <div class="style-info"><h4>Teatro Barroco</h4><p>Sombras profundas, contraste y drama.</p>
                <div class="style-colors"><span style="background:#111"></span><span style="background:#800000"></span><span style="background:#DAA520"></span></div></div>
            </div>
        </div>
    </div>
</div>

<div id="custom-reset-modal" class="custom-modal-overlay" onclick="closeResetModal(event)">
    <div class="custom-modal-content" style="max-width:350px;">
        <div class="modal-header"><h3>Empezar de nuevo</h3><span class="close-modal" onclick="closeResetModal(null)">×</span></div>
        <p style="font-size:13px; color:#999; margin-bottom:25px;">¿Qué te gustaría hacer?</p>
        <div class="modal-actions">
            <button type="button" class="modal-btn btn-retry" onclick="closeResetModal(null); document.getElementById('generate-btn').click(); backToEditor();"><svg class="icon-svg" style="width:14px;"><use xlink:href="#icon-refresh"></use></svg> Reintentar con las mismas imágenes</button>
            <button type="button" class="modal-btn btn-new" onclick="confirmReset()"><svg class="icon-svg" style="width:14px;"><use xlink:href="#icon-upload"></use></svg> Subir nuevas fotos</button>
        </div>
    </div>
</div>

<style>
  :root { --gold: #D4AF37; --black: #111111; --dark-grey: #1a1a1a; --medium-grey: #2a2a2a; --text-light: #f5f5f5; }
  
  .realeza-wrapper * { box-sizing: border-box; }
  .realeza-wrapper { background-color: #000000; color: var(--text-light); padding: 20px 0 80px; font-family: 'Playfair Display', serif; overflow-x: hidden; width: 100%;}
  .realeza-container { max-width: 1100px; margin: auto; padding: 0 20px; }
  .icon-svg { fill: currentColor; display: inline-block; vertical-align: middle; }
  .icon-large { width: 40px; height: 40px; color: #666; }
  .icon-huge { width: 60px; height: 60px; }
  .icon-btn { width: 20px; height: 20px; margin-right: 8px; color: black; }
  .icon-small { width: 14px; height: 14px; margin-right: 6px; }
  .plus-badge { position: absolute; top: -5px; right: -5px; background: var(--gold); border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; }
  .steps-nav { text-align: center; margin-bottom: 30px; color: #666; font-family: sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;}
  .steps-nav .step.active { color: var(--gold); font-weight: bold; }
  .steps-nav .separator { margin: 0 10px; opacity: 0.5; }
  .realeza-header { text-align: center; margin-bottom: 40px; }
  .realeza-title { font-size: 3.8em; margin-bottom: 15px; line-height: 1.1; }
  .realeza-price-hook { color: #ccc; font-family: sans-serif; font-size: 0.95em; }
  .realeza-main-layout { display: grid; grid-template-columns: 1fr 1.1fr; gap: 50px; align-items: start; }
  
  /* ESTILOS MODO VENTA */
  .realeza-main-layout.sales-mode { display: block; }
  .realeza-main-layout.sales-mode .realeza-controls { display: none; }
  .realeza-main-layout.sales-mode .realeza-canvas { width: 100%; max-width: 800px; margin: 0 auto; border: none; background: transparent; padding: 0; }
  .realeza-main-layout.sales-mode .watermark-container { box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
  
  /* CSS DEL SISTEMA DE OVERLAY DE MARCO REALISTA CON ENCAJE */
  .art-display-wrapper { 
      width: 100%; 
      position: relative; 
      transition: all 0.3s ease; 
      padding: 0;
      aspect-ratio: 4 / 5; 
      margin: 0 auto;
      max-width: 96%;
      overflow: hidden;     
      box-shadow: #222 0px 0px 220px; 
      border-radius: 8px;
  }

  /* --- MODOS CSS --- */
  .watermark-container { position: relative; width: 100%; height: 100%; background: #000; }
  
  #artwork-content-box {
      width: 100%;
      height: 100%;
      position: relative;
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform-origin: center center;
  }

  /* MODO ENMARCADO */
  .art-display-wrapper.mode-frame #artwork-content-box { transform: scale(0.77); }
  .art-display-wrapper.mode-frame .watermark-overlay { transform: scale(0.86); opacity: 0.5; }
  .art-display-wrapper.mode-frame .frame-overlay-layer { opacity: 1; }
  .art-display-wrapper.mode-frame { box-shadow: 0 30px 70px rgba(0,0,0,0.8); }

  /* MODO REAL VIEW (SANDWICH) */
  .real-view-layer { position: relative; width: 100%; height: 100%; overflow: hidden; background: #111; }
  .real-scene-overlay { width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 20; pointer-events: none; }
  
  .art-spot {
      position: absolute;
      background-size: cover;
      background-position: center;
      z-index: 10;
      /* Background Image set via JS */
  }

  /* CALIBRACIÓN COORDENADAS (USER SUPPLIED) */
  .art-spot-desk {
        top: 65%;
        left: 24%;
        width: 18%;
        height: 18%;
        transform: rotate(0deg) skewY(0deg);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 0 !important;
    }

    .art-spot-wall {
        top: 12%;
        left: 59%;
        width: 19%;
        height: 19%;
        transform: translateX(-50%);
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.7);
        z-index: 0 !important;
    }

  /* La capa donde va la imagen PNG del marco (Modo Frame) */
  .frame-overlay-layer {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: url('https://cdn.shopify.com/s/files/1/0338/8581/4917/files/oie_transparent_1.png?v=1770105750'); 
      background-size: 100% 100%; background-repeat: no-repeat; pointer-events: none;
      z-index: 40 !important; opacity: 0; transition: opacity 0.4s ease-in-out;
  }

  .final-image { width: 100%; height: 100%; object-fit: cover; display: block; } 
  .watermark-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 20; overflow: hidden;} 
  .wm-logo { position: absolute; width: 28%; opacity: 0.2; user-select: none; transform: translate(-50%, -50%) rotate(-20deg); transform-origin: center; }
  .wm-p1 { top: 16%; left: 16%; } .wm-p2 { top: 16%; left: 50%; } .wm-p3 { top: 16%; left: 84%; }
  .wm-p4 { top: 50%; left: 16%; } .wm-p5 { top: 50%; left: 50%; } .wm-p6 { top: 50%; left: 84%; }
  .wm-p7 { top: 84%; left: 16%; } .wm-p8 { top: 84%; left: 50%; } .wm-p9 { top: 84%; left: 84%; }

  /* --- EFECTO BOOM (ANIMACIÓN DE ENTRADA) --- */
  @keyframes popInEffect {
      0% { opacity: 0; transform: scale(0.9); filter: blur(10px); }
      60% { opacity: 1; transform: scale(1.02); filter: blur(0px); }
      100% { transform: scale(1); }
  }
  .reveal-pop { animation: popInEffect 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

  .frame-toggle-bar { display: flex; justify-content: center; gap: 10px; margin-bottom: 25px; }
  .toggle-btn { background: transparent; border: 1px solid #444; color: #888; padding: 8px 16px; cursor: pointer; border-radius: 20px; font-size: 13px; transition: 0.2s; font-family: sans-serif; display: flex; align-items: center; }
  .toggle-btn.active { border-color: var(--gold); color: var(--gold); background: rgba(212, 175, 55, 0.1); font-weight: bold; }
  
  .style-trigger-box { background: var(--medium-grey); border: 1px solid #444; border-radius: 8px; padding: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
  .style-trigger-box:hover { border-color: var(--gold); background: #222; }
  .trigger-content { display: flex; align-items: center; gap: 12px; }
  .trigger-thumb { width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #555; }
  .trigger-info { display: flex; flex-direction: column; }
  .trigger-title { font-family: sans-serif; font-weight: bold; color: var(--text-light); font-size: 14px; }
  .trigger-desc { font-family: sans-serif; color: #888; font-size: 11px; margin-top: 2px; }
  .upload-instruction-title { font-family: sans-serif; font-weight: bold; color: var(--text-light); font-size: 14px; margin-bottom: 5px; margin-top: 15px; }
  .upload-instruction-desc { font-family: sans-serif; color: #888; font-size: 11px; margin-top: 2px; line-height: 1.4; }
  .fable-dropzone { background: var(--medium-grey); border: 2px dashed #444; border-radius: 12px; padding: 25px; text-align: center; cursor: pointer; transition: all 0.3s ease; min-height: 180px; display: flex; align-items: center; justify-content: center; flex-direction: column; }
  .fable-dropzone:hover { border-color: var(--gold); background: #222; }
  .file-input-hidden { display: none; }
  .preview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 8px; width: 100%; margin-bottom: 10px; }
  .preview-item { position: relative; width: 100%; aspect-ratio: 1; }
  .preview-thumb { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; border: 1px solid #555; }
  .remove-btn { position: absolute; top: -4px; right: -4px; background: #ff4444; color: white; border: none; border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.5); font-size: 10px;}
  .remove-btn:hover { background: #ff0000; transform: scale(1.1); }
  .files-manage-bar { display: flex; justify-content: flex-start; gap: 20px; align-items: center; width: 100%; font-family: sans-serif; font-size: 12px; color: #888; margin-top: 10px; padding: 5px 0; border-top: 1px solid #333; }
  #clear-all-btn { background: none; border: none; color: #999; cursor: pointer; display: flex; align-items: center; padding: 4px 8px; transition: 0.2s; border-radius: 4px; font-size: 11px;}
  .step-label { display: block; color: var(--gold); margin-bottom: 12px; font-family: sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85em; font-weight: bold;}
  .gold-dropdown { width: 100%; padding: 15px; background: var(--medium-grey); border: 1px solid #444; color: var(--text-light); font-family: sans-serif; font-size: 16px; border-radius: 8px; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg fill="%23D4AF37" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); background-repeat: no-repeat; background-position: right 15px center; cursor: pointer; }
  .small-dropdown { padding: 10px; font-size: 14px; background-position: right 10px center; }
  .btn-gold { margin-top: 30px; background: linear-gradient(135deg, #B8860B, #D4AF37); color: black; border: none; width: 100%; padding: 18px; font-size: 15px; font-weight: bold; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; border-radius: 8px; transition: all 0.2s; display: flex; align-items: center; justify-content: center;}
  .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3); }
  .btn-gold:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  .loading-text { text-align: center; color: var(--gold); font-family: sans-serif; font-size: 14px; margin-bottom: 5px; min-height: 20px;}
  .progress-bar-bg { width: 100%; height: 4px; background: #333; border-radius: 2px; overflow: hidden; }
  .progress-bar-fill { height: 100%; width: 0%; background: var(--gold); transition: width 0.5s ease; }
  .realeza-canvas { background: #0c0c0c; border: 1px solid #222; padding: 20px; border-radius: 12px; min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .placeholder-box { margin-top: 0; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  #result-container { width: 100%; text-align: center; }
  .buy-box { margin-top: 25px; width: 100%; text-align: left; animation: fadeIn 1s; }
  .success-msg { color: white; font-size: 2.5em; text-align: center; margin-bottom: 20px; font-family: 'Playfair Display', serif; }
  .pricing-card { background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 20px; margin-bottom: 20px; transition: 0.3s; }
  .pricing-card:hover { border-color: #555; }
  .pricing-card.digital-tier { border: 1px solid var(--gold); background: #111; }
  .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
  .card-header h3 { margin: 0; font-size: 1.5em; color: var(--text-light); max-width: 100%; line-height: 1.2; }
  .price-block { text-align: right; min-width: 80px;}
  .price { font-size: 1.5em; color: var(--gold); font-weight: bold; display: block; }
  .timer-badge { font-family: sans-serif; font-size: 11px; background: #333; color: #ff6b6b; padding: 4px 8px; border-radius: 4px; margin-top: 5px; display: inline-block;}
  .badge-highlight { display: inline-block; color: white; font-size: 10px; font-weight: bold; padding: 4px 10px; border-radius: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);}
  .badge-popular { background: linear-gradient(135deg, #28a745, #34ce57); }
  .badge-gift { background: linear-gradient(135deg, #dc3545, #e4606d); }
  .card-desc { font-family: sans-serif; font-size: 15px; color: #999; margin-bottom: 15px; line-height: 1.4; }
  .features-list { list-style: none; padding: 0; margin: 0 0 20px 0; font-family: sans-serif; font-size: 13px; color: #ccc; }
  .features-list li { margin-bottom: 8px; display: flex; align-items: center; }
  .btn-checkout { background: var(--gold); color: black; border: none; padding: 14px; font-weight: bold; cursor: pointer; width: 100%; font-size: 14px; letter-spacing: 1px; transition: 0.3s; border-radius: 6px; text-transform: uppercase; }
  .btn-checkout:hover { background: #e5c15d; }
  .btn-checkout.btn-dark { background: #333; color: var(--text-light); }
  .btn-checkout.btn-dark:hover { background: #444; }
  .shipping-compact { display: flex; align-items: center; justify-content: flex-start; gap: 10px; background: rgba(212, 175, 55, 0.08); padding: 8px 12px; border-radius: 6px; border: 1px solid #333; margin-bottom: 15px; width: 100%; flex-wrap: nowrap; overflow-x: auto; }
  .ship-item { display: flex; align-items: center; gap: 5px; font-size: 12px; white-space: nowrap; }
  .ship-divider { color: #555; margin: 0 5px; }
  .icon-check-green { fill: #28a745 !important; }
  .realeza-gallery-section { margin-top: 80px; text-align: center; }
  .gallery-container { overflow: hidden; width: 100%; position: relative; }
  .gallery-track { display: flex; width: max-content; animation: scroll 90s linear infinite; }
  .gallery-slide { width: 250px; padding: 0 10px; flex-shrink: 0; }
  .gallery-slide img { width: 100%; border-radius: 8px; border: 1px solid #333; transition: 0.3s; }
  @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .custom-modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(5px); }
  .custom-modal-content { position: relative; background: #1a1a1a; padding: 30px; border-radius: 12px; border: 1px solid #333; width: 90%; max-width: 420px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.6); margin: auto; animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
  .modal-header h3 { margin: 0; color: white; font-size: 18px; }
  .close-modal { cursor: pointer; font-size: 24px; color: #666; transition:0.2s; }
  .modal-actions { display: flex; gap: 10px; margin-top: 25px; justify-content: center; align-items: center; }
  .modal-btn { flex: 1; padding: 6px 10px; border-radius: 6px; border: none; font-weight: bold; cursor: pointer; transition: 0.2s; color: white; font-size: 11px; display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 6px; min-height: auto; line-height: 1.2; }
  .btn-retry { background: #2a2a2a; border: 1px solid #444; color: #ccc; height: 80px; }
  .btn-new { background: var(--gold); color: black; height: 80px; }
  .style-modal-content { position: relative; background: #1a1a1a; padding: 25px; border-radius: 12px; border: 1px solid #333; width: 90%; max-width: 500px; box-shadow: 0 30px 60px rgba(0,0,0,0.8); margin: auto; max-height: 85vh; overflow-y: auto; animation: popIn 0.3s ease; }
  .style-options-list { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
  .style-card { display: flex; align-items: center; gap: 15px; background: #222; border: 1px solid #333; border-radius: 8px; padding: 10px; cursor: pointer; transition: 0.2s; }
  .style-card:hover { border-color: var(--gold); background: #2a2a2a; transform: translateX(5px); }
  .style-thumb { width: 70px; height: 70px; object-fit: cover; border-radius: 6px; }
  .style-info h4 { margin: 0 0 5px 0; color: white; font-size: 15px; font-family: 'Playfair Display', serif; }
  .style-info p { margin: 0 0 8px 0; color: #999; font-size: 12px; font-family: sans-serif; }
  .style-colors { display: flex; gap: 5px; }
  .style-colors span { width: 12px; height: 12px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); }
  
  @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

  @media (max-width: 900px) { 
    .realeza-main-layout { grid-template-columns: 1fr; gap: 30px; } 
    .realeza-canvas { padding: 10px; min-height: auto; width: 100% !important; }
    .realeza-container { padding: 0 15px; width: 100%; overflow-x: hidden; }
    .watermark-container { width: 100% !important; max-width: 100% !important; box-sizing: border-box; } 
    .realeza-title { font-size: 2.5rem; }
    .steps-nav { font-size: 10px; letter-spacing: 0.5px; } 
    .steps-nav .separator { margin: 0 3px; } 
    .shipping-compact { overflow-x: auto; } 
  }
  
  .realeza-canvas.full-width-mode { width: 100%; max-width: 800px; margin: 0 auto; border: none; background: transparent; padding: 0; }
  .full-width-mode .watermark-container { box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
</style>

<script>
  const API_URL = "https://realeza-api-production.up.railway.app/generate"; 
  const DIGITAL_ID = '47552003834074'; // ID ACTUALIZADO
  let selectedFiles = [];

  window.onload = function() {
      const savedImage = localStorage.getItem('realeza_result');
      if (savedImage) { showResultState(savedImage, false); }
      updatePrices();
  };

  // --- MODE LOGIC (Canvas | Frame | Real) ---
  function setMode(mode) {
      const display = document.getElementById('art-display-wrapper');
      const normalLayer = document.querySelector('.normal-view-layer');
      const realLayer = document.querySelector('.real-view-layer');
      
      const btnCanvas = document.getElementById('btn-canvas');
      const btnFrame = document.getElementById('btn-frame');
      const btnReal = document.getElementById('btn-real');
      
      // Reset all classes
      display.classList.remove('mode-canvas', 'mode-frame', 'mode-real');
      btnCanvas.classList.remove('active');
      btnFrame.classList.remove('active');
      btnReal.classList.remove('active');
      
      // Get Generated Image URL
      const currentImage = document.getElementById('result-image').src;

      if (mode === 'real') {
          // ACTIVATE REAL MODE
          display.classList.add('mode-real');
          btnReal.classList.add('active');
          normalLayer.style.display = 'none';
          realLayer.style.display = 'block';
          
          // Inject Generated Art into Wall & Desk Spots
          document.querySelector('.art-spot-wall').style.backgroundImage = `url('${currentImage}')`;
          document.querySelector('.art-spot-desk').style.backgroundImage = `url('${currentImage}')`;
          
      } else if (mode === 'frame') {
          // ACTIVATE FRAME MODE
          display.classList.add('mode-frame');
          display.classList.add('with-virtual-frame'); // Legacy class
          btnFrame.classList.add('active');
          normalLayer.style.display = 'block';
          realLayer.style.display = 'none';
          
      } else {
          // ACTIVATE CANVAS MODE (Default)
          display.classList.add('mode-canvas');
          display.classList.remove('with-virtual-frame');
          btnCanvas.classList.add('active');
          normalLayer.style.display = 'block';
          realLayer.style.display = 'none';
      }
  }

  // --- MODAL LOGIC ---
  function openResetModal() { document.getElementById('custom-reset-modal').style.display = 'flex'; }
  function closeResetModal(e) { if (e && e.target !== e.currentTarget && e.target.className !== 'close-modal') return; document.getElementById('custom-reset-modal').style.display = 'none'; }
  function openStyleModal() { document.getElementById('style-modal').style.display = 'flex'; }
  function closeStyleModal(e) { if (e && e.target !== e.currentTarget && e.target.className !== 'close-modal') return; document.getElementById('style-modal').style.display = 'none'; }
  
  function selectStyle(styleCode, styleName, styleDesc, imgUrl) {
      document.getElementById('selected-style-value').value = styleCode;
      document.getElementById('trigger-title-display').innerText = styleName;
      document.getElementById('trigger-desc-display').innerText = styleDesc;
      document.getElementById('trigger-icon').src = imgUrl;
      document.getElementById('style-modal').style.display = 'none';
  }

  function confirmReset() { 
      localStorage.removeItem('realeza_result'); 
      localStorage.removeItem('realeza_originals'); 
      location.reload(); 
  }
  
  function backToEditor() {
      document.getElementById('back-to-edit-bar').style.display = 'none';
      document.getElementById('canvas-section').style.display = 'none';
      document.getElementById('canvas-section').classList.remove('full-width-mode'); 
      document.getElementById('main-header-block').style.display = 'block'; 
      document.getElementById('controls-section').style.display = 'block';   
      document.getElementById('bottom-gallery').style.display = 'block';    
      document.getElementById('generate-btn').disabled = false;
      document.getElementById('generate-btn').innerHTML = '<svg class="icon-svg icon-btn"><use xlink:href="#icon-sparkles"></use></svg> <span id="btn-text">CREAR OBRA MAESTRA</span>';
  }

  function triggerFileInput() { document.getElementById('pet-photo').click(); }
  function handleNewFiles(input) { if (input.files && input.files.length > 0) { if (selectedFiles.length + input.files.length > 5) { alert("⚠️ Máximo 5 fotos permitidas."); input.value = ''; return; } selectedFiles = selectedFiles.concat(Array.from(input.files)); input.value = ''; renderPreviewGrid(); updateUIForFiles(); } }
  function removeFile(index) { selectedFiles.splice(index, 1); renderPreviewGrid(); updateUIForFiles(); }
  function clearAllFiles(e) { e.stopPropagation(); selectedFiles = []; renderPreviewGrid(); updateUIForFiles(); }
  function renderPreviewGrid() { const grid = document.getElementById('preview-grid'); grid.innerHTML = ''; selectedFiles.forEach((file, index) => { const reader = new FileReader(); reader.onload = function(e) { const div = document.createElement('div'); div.className = 'preview-item'; const img = document.createElement('img'); img.src = e.target.result; img.className = 'preview-thumb'; const btn = document.createElement('button'); btn.className = 'remove-btn'; btn.innerHTML = '<svg class="icon-svg" style="width:8px; height:8px;"><use xlink:href="#icon-trash"></use></svg>'; btn.onclick = (e) => { e.stopPropagation(); removeFile(index); }; div.appendChild(img); div.appendChild(btn); grid.appendChild(div); }; reader.readAsDataURL(file); }); }
  function updateUIForFiles() { const placeholder = document.getElementById('upload-placeholder'); const container = document.getElementById('preview-container'); const btnText = document.getElementById('btn-text'); const counter = document.getElementById('file-counter'); if (selectedFiles.length > 0) { placeholder.style.display = 'none'; container.style.display = 'block'; counter.innerText = selectedFiles.length + "/5 fotos"; btnText.innerText = "CREAR OBRA MAESTRA"; document.getElementById('step-preview').classList.add('active'); } else { placeholder.style.display = 'block'; container.style.display = 'none'; btnText.innerText = "CREAR OBRA MAESTRA"; } }
  
  function updatePrices() { 
      const smallSelect = document.getElementById('small-size-select'); 
      if (smallSelect.value === '48447180800243') { document.getElementById('price-small').innerText = 'L249'; } else { document.getElementById('price-small').innerText = 'L349'; } 
      const largeSelect = document.getElementById('large-size-select'); 
      if (largeSelect.value === '48447180865779') { document.getElementById('price-large').innerText = 'L699'; } else if (largeSelect.value === '48447180898547') { document.getElementById('price-large').innerText = 'L1099'; } else { document.getElementById('price-large').innerText = 'L1799'; }
  }
  
  async function generateImage() {
    const style = document.getElementById('selected-style-value').value;
    const btn = document.getElementById('generate-btn'); 
    const loadingArea = document.getElementById('loading-area'); 
    const canvasSection = document.getElementById('canvas-section'); 
    const resultContainer = document.getElementById('result-container'); 
    const placeholder = document.getElementById('placeholder-art'); 
    const resultImage = document.getElementById('result-image');
    
    if (selectedFiles.length === 0) { alert("⚠️ Por favor sube al menos una foto."); return; }
    
    resultImage.src = '';
    resultImage.classList.remove('reveal-pop'); 

    btn.disabled = true; 
    
    document.getElementById('main-layout').style.display = 'grid'; 
    document.getElementById('controls-section').style.display = 'block';
    canvasSection.style.display = 'flex'; 
    
    loadingArea.style.display = 'block'; 
    placeholder.style.display = 'block'; 
    resultContainer.style.display = 'none';
    
    // SCROLL CENTERED ON LOADING BAR
    setTimeout(() => { loadingArea.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
    
    const loadingInterval = startLoadingAnimation();
    
    const readPromises = selectedFiles.map(file => { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); });
    
    try {
        const imagesBase64 = await Promise.all(readPromises);
        const response = await fetch(API_URL, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ images: imagesBase64, style: style }) 
        });
        const data = await response.json();
        clearInterval(loadingInterval); document.getElementById('progress-bar-fill').style.width = "100%";
        
        if (data.success) { 
            localStorage.setItem('realeza_result', data.imageUrl);
            if (data.originalUrls) localStorage.setItem('realeza_originals', JSON.stringify(data.originalUrls));
            
            showResultState(data.imageUrl, true); 
        } else { 
            throw new Error(data.error || "Error desconocido"); 
        }
    } catch (error) { 
        clearInterval(loadingInterval); console.error(error); loadingArea.style.display = "none"; btn.disabled = false; alert("Hubo un error. Intenta de nuevo."); 
    }
  }

  function showResultState(imageUrl, doScroll = false) {
      const resultImage = document.getElementById('result-image');
      const resultContainer = document.getElementById('result-container');
      const loadingArea = document.getElementById('loading-area');
      const placeholder = document.getElementById('placeholder-art');

      const tempImg = new Image();
      tempImg.src = imageUrl;
      
      tempImg.onload = function() {
          resultImage.src = imageUrl;
          resultImage.classList.add('reveal-pop');

          // Reset to Canvas mode by default
          setMode('canvas');

          document.getElementById('main-header-block').style.display = 'none'; 
          document.getElementById('controls-section').style.display = 'none';   
          document.getElementById('bottom-gallery').style.display = 'none';    

          const backBar = document.getElementById('back-to-edit-bar');
          backBar.style.display = 'block'; 
          
          const canvasSection = document.getElementById('canvas-section');
          canvasSection.style.display = 'block'; 
          canvasSection.classList.add('full-width-mode'); 

          resultContainer.style.display = "block"; 
          loadingArea.style.display = "none";
          placeholder.style.display = "none";

          startTimer();

          if (doScroll) {
              setTimeout(() => { backBar.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
          } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      };
  }

  function startLoadingAnimation() { const textEl = document.getElementById('loading-text'); const barEl = document.getElementById('progress-bar-fill'); const timerEl = document.getElementById('loading-seconds'); let width = 0; let secondsLeft = 60; const messages = ["Conectando con el atelier...", "Contando sujetos...", "Aplicando jerarquía real...", "Pintando al óleo...", "Finalizando detalles..."]; barEl.style.width = "0%"; textEl.innerText = messages[0]; const interval = setInterval(() => { if (width < 95) width += 0.5; barEl.style.width = width + "%"; if (width > 20) textEl.innerText = messages[1]; if (width > 45) textEl.innerText = messages[2]; if (width > 70) textEl.innerText = messages[3]; if (width > 90) textEl.innerText = messages[4]; if (Math.random() > 0.7) secondsLeft--; if (secondsLeft < 5) secondsLeft = 5; timerEl.innerText = `~${secondsLeft} segundos restantes`; }, 200); return interval; }
  let countdownInterval;
  function startTimer() { let duration = 15 * 60; const timerDisplay = document.getElementById('countdown-timer'); clearInterval(countdownInterval); countdownInterval = setInterval(function () { let minutes = parseInt(duration / 60, 10); let seconds = parseInt(duration % 60, 10); minutes = minutes < 10 ? "0" + minutes : minutes; seconds = seconds < 10 ? "0" + seconds : seconds; timerDisplay.textContent = minutes + ":" + seconds; if (--duration < 0) { clearInterval(countdownInterval); timerDisplay.textContent = "EXPIRADO"; timerDisplay.style.color = "red"; } }, 1000); }

  function addDigitalToCart(btn) { addToCartCommon(DIGITAL_ID, btn, "Descarga Digital"); }
  function addSmallPrintToCart(btn) { const selectedId = document.getElementById('small-size-select').value; addToCartCommon(selectedId, btn, "Impresión Pequeña"); }
  function addLargePrintToCart(btn) { const selectedId = document.getElementById('large-size-select').value; addToCartCommon(selectedId, btn, "Impresión Grande"); }

  function addToCartCommon(variantId, btnElement, tipo) {
    const originalText = btnElement.innerText;
    btnElement.innerText = "⏳ PROCESANDO...";
    btnElement.disabled = true;
    
    const finalImageUrl = localStorage.getItem('realeza_result') || "No image generated";
    let originalUrlsString = "No originals";
    try {
        const originals = JSON.parse(localStorage.getItem('realeza_originals'));
        if (originals && Array.isArray(originals)) { originalUrlsString = originals.join(' | '); }
    } catch (e) { console.error(e); }
    
    fetch('/cart/add.js', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        items: [{ 
          id: variantId, 
          quantity: 1, 
          properties: { 
            'Estilo': document.getElementById('selected-style-value').value, 
            'Tipo': tipo, 
            'Nota': '✅ Hemos guardado tu diseño generado. ⚠️ NOTA: Este producto debe ser pagado con tarjeta o deposito, no aceptamos pago contra entrega.',
            '_Imagen_Final_HR': finalImageUrl,
            '_Fotos_Referencia': originalUrlsString
          } 
        }] 
      })
    })
    .then(r => r.json())
    .then(() => { window.location.href = '/checkout'; })
    .catch((e) => { console.error(e); btnElement.innerText = "❌ ERROR"; setTimeout(() => { btnElement.innerText = originalText; btnElement.disabled = false; }, 2000); });
  }
</script>

{% schema %}
{ "name": "Widget V50.7 Mascotas", "settings": [], "presets": [{ "name": "Widget V50.7 Mascotas" }] }
{% endschema %}
