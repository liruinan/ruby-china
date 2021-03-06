(function() {
  var strings = {
    "zh-CN": {
      prefixAgo: null,
      prefixFromNow: null,
      suffixAgo: "前",
      suffixFromNow: "刚刚",
      seconds: "不到 1 分钟",
      minute: "约 1 分钟",
      minutes: "%d 分钟",
      hour: "1 小时",
      hours: "%d 小时",
      day: "1 天",
      days: "%d 天",
      month: "1 月",
      months: "%d 月",
      year: "1 年",
      years: "%d 年",
      numbers: [],
      formatter: function(prefix, words, suffix) { return [prefix, words, suffix].join(""); }
    },
    "en": {
      prefixAgo: null,
      prefixFromNow: null,
      suffixAgo: "ago",
      suffixFromNow: "one second",
      seconds: "few seconds",
      minute: "one minute",
      minutes: "%d minutes",
      hour: "one hour",
      hours: "%d hours",
      day: "one day",
      days: "%d days",
      month: "one month",
      months: "%d months",
      year: "one year",
      years: "%d years",
      numbers: [],
      formatter: function(prefix, words, suffix) { return [prefix, words, suffix].join(" "); }
    },
    "zh-TW": {
      prefixAgo: null,
      prefixFromNow: null,
      suffixAgo: "前",
      suffixFromNow: "剛剛",
      seconds: "不到 1 分鐘",
      minute: "約 1 分鐘",
      minutes: "%d 分鐘",
      hour: "1 小時",
      hours: "%d 小時",
      day: "1 天",
      days: "%d 天",
      month: "1 月",
      months: "%d 月",
      year: "1 年",
      years: "%d 年",
      numbers: [],
      formatter: function(prefix, words, suffix) { return [prefix, words, suffix].join(""); }
    }
  };

  $("document").ready(function() {
    var localized = strings[App.locale];
    if (localized) {
      jQuery.timeago.settings.strings = localized;
    }
  });

})();
