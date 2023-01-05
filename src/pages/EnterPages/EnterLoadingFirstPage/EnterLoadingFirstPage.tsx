import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import Typewriter from "typewriter-effect";

const EnterLoadingFirstPage = () => {
  const navigate = useNavigate();
  const intervalRef = useRef();

  useEffect(() => {
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      const windowElement = document.getElementById("window");
      if (windowElement)
        windowElement.scrollTop = windowElement.scrollHeight;
    }, 100)
  }, [])

  useEffect(() => {

  })

  return (
    <Window
      id="window"
      chrome
      className="fixed left-2 lg:left-12 top-14 lg:top-20 terminal-size lg:lg-terminal-size overflow-y-scroll"
    >
      <TitleBar
        className="fixed terminal-command-width lg:lg-terminal-command-width z-10"
        title="Command Terminal"
        controls
      />
      <Text size="20px" className="py-2">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pasteString(`
                Last login: Thu Nov 17 16:38:46 on ttys000
                <br/>
                guestcomputer@Brand-New-Computer ~ %
              `, null)
              .pauseFor(1000)
              .typeString('npm install')
              .pasteString(`
                <br />
                npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
              `, null)
              .pasteString(`
                <br />
                npm WARN deprecated w3c-hr-time@1.0.2: Use your platform’s native performance.now() and performance.timeOrigin.              
              `, null)
              .pasteString(`
                <br />
                npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
                <br />
                npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
                <br />
                npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
              `, null)
              .pasteString(`
                <br />
                <br />
                added 1465 packages, and audited 1466 packages in 1m
                <br />
                <br />
                226 packages are looking for funding
                <br />
                 run \`npm fund\` for details
                <br />
                <br />
                7 <b>high</b> severity vulnerabilities
                <br />
                <br />
                To address issues that do not require attention, run:
                <br />
                 npm audit fix
                <br />
                <br />
                To address all issues (including breaking changes), run:
                <br />
                 npm audit fix --force
                <br />
                <br />
                Run \`npm audit\` for details.
              `, null)
              .pasteString(`
                <br />
                guestcomputer@Brand-New-Computer ~ %
              `, null)
              .pauseFor(1000)
              .typeString(`npm run build`)
              .pasteString(`
                <br />
                > algoseedlabs@0.1.0 build
                <br />
                > react-scripts build
                <br />
                <br />
                Creating an optimized production build...ce Recommended protections disabled.
                <br />
                [BABEL] Note: The code generator has deoptimised the styling of 
                <br />
                /Users/apple/Downloads/algoseedlabs/src/assets/images/home/home-splash.svg as it exceeds the max of 500KB.
                <br />
                [BABEL] Note: The code generator has deoptimised the styling of undefined as it exceeds the max of 500KB.
                <br />
                <br />
                Search for the keywords to learn more about each warning.
                <br />
                To ignore, add // eslint-disable-next-line to the line before.
                <br />
                <br />
                File sizes after gzip:
                <br />
                <br />
                 139.12 kB build/static/js/main.b5bde54d.js
                <br />
                 8.85 kB  build/static/css/main.2f085bf5.css
                <br/>
                 1.78 kB  build/static/js/787.b266f215.chunk.js
                <br />
                <br />
                The project was built assuming it is hosted at /.
                <br />
                You can control this with the homepage field in your package.json.
                <br />
                <br />
                The build folder is ready to be deployed.
                <br />
                You may serve it with a static server:force Recommended protections disabled.
                <br />
                <br />
                 npm install -g serve
                <br />
                 serve -s build
                <br />
                <br />
                Find out more about deployment here:
                <br />
                <br />
                 https://cra.link/deployment
              `, null)
              .start()
              .callFunction(() => {
                setTimeout(() => {
                  clearInterval(intervalRef.current);
                  navigate("/enter/loading2");
                }, 1000)
              });
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 80,
            cursorClassName: "terminal-cursor"
          }}
        />
      </Text>
    </Window>
  )
}

export default EnterLoadingFirstPage