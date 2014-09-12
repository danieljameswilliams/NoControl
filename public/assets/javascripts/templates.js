function allTemplates() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['company'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.story, '    ', 'story', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.story, '  ', 'story', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"icebox__container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.icebox : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n<hr>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.backlog : depth0)) != null ? stack1.todo : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.backlog : depth0)) != null ? stack1.inProgress : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.backlog : depth0)) != null ? stack1.qa : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<hr>\n<div class=\"done__container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.done : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});
templates['home'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <a href=\"/company/";
  stack1 = ((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<article class=\"navigation__quick\">\n  <form class=\"quick__search\" action=\"/services/search\" method=\"GET\">\n    <input type=\"text\" name=\"quick__search-value\">\n  </form>\n  <menu class=\"navigation__quick\">\n    <h1>Kunder</h1>\n    <!-- Idea: Word cloud, size based on activity in the last 6 months -->\n    <div class=\"customer__cloud\">\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n  </menu>\n</article>\n";
},"useData":true});
templates['master'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>NoControl - SCRUM for No Zebra</title>\n\n  <!-- TODO: Replace this <link> with compressed inline CSS using Grunt -->\n  <link rel=\"stylesheet\" href=\"/assets/stylesheets/page_init.css\" media=\"screen\">\n</head>\n<body class=\"js-listen-to-keyboard\">\n  <header class=\"header\">\n    <div class=\"header__logo\">\n      <a href=\"/\">\n        <img src=\"/assets/images/logo.png\" alt=\"\">\n      </a>\n    </div>\n    <div class=\"header__weeknum\">\n      Uge <span class=\"weeknum__value js-weeknum__value\">36</span>\n    </div>\n    <form class=\"header__sprint-select js-header__sprint-select\" action=\"/sprint\" method=\"GET\">\n      <input type=\"hidden\" name=\"async\" value=\"false\">\n      Sprint\n      <select class=\"sprint-select__weeknum js-sprint-select__weeknum\" name=\"sprint_id\">\n        <option value=\"11\">11</option>\n        <option value=\"12\" selected>12*</option>\n        <option value=\"13\">13</option>\n      </select>\n      <label>\n        <strong>Team <span><u>2</u>56</span></strong>\n        <input type=\"radio\" class=\"quick__search-value js-quick__search-value\" name=\"sprint_team\" data-keycode=\"50\" value=\"256\">\n      </label>\n      <label>\n        <strong>Team <span><u>D</u>igital Heroes</span></strong>\n        <input type=\"radio\" class=\"quick__search-value js-quick__search-value\" name=\"sprint_team\" data-keycode=\"68\" value=\"digitalheroes\">\n      </label>\n    </form>\n  </header>\n  <div class=\"bodyDOM\">";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n  <!-- Scenario: Developer goes to customer, gets info of [customer satisfaction by smiley], [bug report count], [ROI] -->\n\n  <!-- TODO: Run these scripts async in a bundle when DOM is loaded -->\n  <script type=\"text/javascript\" src=\"/assets/javascripts/lib/jquery.js\"></script>\n  <script type=\"text/javascript\" src=\"/assets/javascripts/lib/handlebars_runtime.js\"></script>\n  <script type=\"text/javascript\" src=\"/assets/javascripts/lib/history.js\"></script>\n  <script type=\"text/javascript\" src=\"/assets/javascripts/templates.js\"></script>\n\n  <script type=\"text/javascript\" src=\"/assets/javascripts/global/_templating.js\"></script>\n  <script type=\"text/javascript\" src=\"/assets/javascripts/partials/_get-sprint.js\"></script>\n  <script type=\"text/javascript\" src=\"/assets/javascripts/page_load.js\"></script>\n</body>\n</html>\n";
},"useData":true});
templates['story'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"useData":true});
templates['sprint'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <div>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
}
