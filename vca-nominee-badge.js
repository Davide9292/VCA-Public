// vca-nominee-badge.js

(function() {
    // Check if the badge container already exists to prevent multiple injections
    if (document.getElementById('vca-badge-shortlisted')) {
        return;
    }

    // 1. Create the <style> element and inject CSS
    const style = document.createElement('style');
    style.textContent = `
        /* Import Barlow font */
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');

        /* --- Shortlisted Badge CSS --- */
        #vca-badge-shortlisted {
            position: fixed;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            width: 84px;
            height: 160px;
            z-index: 9999;
            font-family: 'Barlow', sans-serif;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }

        #vca-badge-shortlisted a {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: inherit;
        }

        #vca-badge-shortlisted .vca-badge-inner {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            border-radius: 0;
            overflow: hidden;
        }

        #vca-badge-shortlisted .vca-badge-top {
            background-color: #F4F4F3;
            width: 100%;
            height: 131px;
            border: 1px solid #000000;
            border-radius: 12px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding-bottom: 10px;
        }

        /* Styling for the main icon SVG */
        #vca-badge-shortlisted .vca-icon-main {
            position: absolute;
            left: 12px;
            top: 9.916748046875px;
            width: 44.520469665527344px;
            height: 72.083251953125px;
            fill: #000000;
        }

        /* Styling for the horizontal line SVG */
        #vca-badge-shortlisted .vca-line {
            position: absolute;
            left: 0;
            top: 100px;
            width: 84px;
            height: 1px;
            stroke: #000000;
            stroke-width: 1;
            opacity: 1;
        }

        /* Styling for the "Nominee" text SVG */
        #vca-badge-shortlisted .vca-text-nominee {
            position: absolute;
            left: 13.168000221252441px;
            top: 108.43199920654297px;
            width: 58.13837432861328px;
            height: 11.712000846862793px;
            fill: #000000;
        }

        #vca-badge-shortlisted .vca-badge-cta {
            background-color: #B8FF3D;
            width: 100%;
            height: 24px;
            border: 1px solid #000000;
            border-radius: 100px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-shrink: 0;
            margin-top: 5px;
        }

        /* Styling for the "VOTE!" text SVG */
        #vca-badge-shortlisted .vca-text-vote {
            width: 56.523155212402344px;
            height: 15.796000480651855px;
            fill: #000000;
        }

        /* Hover effect for the CTA */
        #vca-badge-shortlisted a:hover .vca-badge-cta {
            filter: brightness(1.1);
        }
    `;
    document.head.appendChild(style);

    // 2. Create the badge HTML structure
    const badgeHtml = `
        <a href="https://your-award-site.com/vote-for-project" target="_blank" rel="noopener noreferrer">
            <div class="vca-badge-inner">
                <div class="vca-badge-top">
                    <!-- Placeholder SVG for the main icon (replace with your actual SVG path data) -->
                    <svg class="vca-icon-main" viewBox="0 0 44.52 72.08">
                        <path d="M22.26 0L0 72.08h44.52L22.26 0zM22.26 12.08L36.44 60H8.08L22.26 12.08zM18.26 30h8v15h-8zm0 18h8v6h-8z"/>
                    </svg>
                    <!-- Placeholder SVG for the horizontal line (replace with your actual SVG path data if different) -->
                    <svg class="vca-line" viewBox="0 0 84 1">
                        <line x1="0" y1="0.5" x2="84" y2="0.5" stroke="black" stroke-width="1"/>
                    </svg>
                    <!-- Placeholder SVG for "Nominee" text (replace with your actual SVG path data) -->
                    <svg class="vca-text-nominee" viewBox="0 0 58.14 11.71">
                        <path d="M57.94 11.71L58.14 0H0V11.71H57.94ZM1.81 1.81H56.33V9.9H1.81V1.81Z"/>
                    </svg>
                </div>
                <div class="vca-badge-cta">
                    <!-- Placeholder SVG for "VOTE!" text (replace with your actual SVG path data) -->
                    <svg class="vca-text-vote" viewBox="0 0 56.52 15.80">
                        <path d="M56.52 15.80L56.52 0H0V15.80H56.52ZM1.81 1.81H54.71V13.99H1.81V1.81Z"/>
                    </svg>
                </div>
            </div>
        </a>
    `;

    // 3. Create the main badge container and inject HTML
    const badgeContainer = document.createElement('div');
    badgeContainer.id = 'vca-badge-shortlisted';
    badgeContainer.innerHTML = badgeHtml;

    // 4. Append the badge to the body
    document.body.appendChild(badgeContainer);
})(); 