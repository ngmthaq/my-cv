// Function Utils
import * as ArrayUtils from "./array.utils";
import * as CommonUtils from "./common.utils";
import * as NumberUtils from "./number.utils";
import * as ObjUtils from "./obj.utils";
import * as StorageUtils from "./storage.utils";
import * as StrUtils from "./str.utils";

// Class Utils
import EventBusUtils from "./bus.utils";

const Utils = {
  // Function Utils
  Array: ArrayUtils,
  Common: CommonUtils,
  Number: NumberUtils,
  Obj: ObjUtils,
  Storage: StorageUtils,
  Str: StrUtils,

  // Class Utils
  Bus: EventBusUtils,
};

export default Utils;
