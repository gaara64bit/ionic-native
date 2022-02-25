/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name G P S Mock Checker
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { GPSMockChecker } from '@awesome-cordova-plugins/gps-mock-checker';
 *
 *
 * constructor(private gPSMockChecker: GPSMockChecker) { }
 *
 * ...
 *
 *
 * this.gPSMockChecker.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GPSMockChecker',
  plugin: 'cordova-plugin-gpsmockchecker', // npm package name, example: cordova-plugin-camera
  pluginRef: 'GPSMockChecker', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/gaara64bit/cordova-plugin-gpsmockchecker.git', // the github repository URL for the plugin
  install: 'ionic cordova plugin add https://github.com/gaara64bit/cordova-plugin-gpsmockchecker.git', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class GPSMockChecker extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param args Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  check(args: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
