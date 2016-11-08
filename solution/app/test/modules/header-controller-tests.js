/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// jshint esversion: 6
import HeaderController from 'header-controller';
import sinon from 'sinon-es6';
import $ from 'jquery';

const containerID = 'headers';

QUnit.module('Header controller', {beforeEach: () => {
  let fixture = document.getElementById('qunit-fixture');
  fixture.innerHTML = window.__html__['headers-fixture'];
}});

QUnit.test('default selection is "shop"', assert => {
  let container = document.getElementById(containerID);
  let header = new HeaderController();
  assert.equal(header.selection, 'shop', 'selection');
  });

  QUnit.test('default selection is shop links only', assert => {
    let hrefs = getActiveLinks();
    assert.deepEqual(hrefs, ['#shop', '#shop'], 'default selection');
    });

  QUnit.test('can select cart', assert => {
    let header = new HeaderController();
    header.selection = 'cart';
    assert.equal(header.selection, 'cart', 'new selection');
    let hrefs = getActiveLinks();
    assert.deepEqual(hrefs, ['#cart', '#cart'], 'changed selection');
    });

function getActiveLinks() {
  let container = document.getElementById(containerID);
  let activeLinks = container.querySelectorAll('a.is-active');
  activeLinks = Array.prototype.slice.call(activeLinks); // make array
  return activeLinks.map((node) => node.getAttribute('href'));
}
/*
QUnit.test('single item renders a single row', assert => {
  let container = document.getElementById(containerID);
  let view = new ShopView(noCart, [products[0]]);
  view.render();
  let items = container.querySelectorAll(view.itemSelector);
  assert.equal(items.length, 1, 'rows rendered');
  });

QUnit.test('two items', assert => {
  let container = document.getElementById(containerID);
  let view = new ShopView(noCart, products.slice(0, 2));
  view.render();
  let items = container.querySelectorAll(view.itemSelector);
  assert.equal(items.length, 2, 'rows rendered');
  });

QUnit.test('click to buy item updates cart', assert => {
  let cart = new Cart();
  let addStub = sinon.stub(cart, 'add');

  let container = document.getElementById(containerID);
  let view = new ShopView(cart, products.slice(0, 2));
  view.render();
  let button = container.querySelector('button.mdl-button');
  assert.ok(button, "click target found");
  $(button).trigger($.Event("click"));
  assert.ok(addStub.called, 'called add');
  assert.ok(addStub.calledWith(products[0]), 'called with product');
  });
*/
